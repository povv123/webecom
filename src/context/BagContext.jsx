import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "./AuthContext";
import * as cartApi from "../API/cart";
import { getProductsByIds } from "../API/products";

const BagContext = createContext();
const STORAGE_KEY = "bagItems";

// Only keep what the bag UI needs (avoids stuffing whole product docs
// into localStorage).
const slim = (item, quantity) => ({
  id: item.id,
  _id: item._id,
  name: item.name,
  price: item.price,
  image: item.image,
  tagline: item.tagline,
  subCategory: item.subCategory,
  quantity,
});

export function BagProvider({ children }) {
  const { isAuthenticated } = useAuth() || {};

  const [bagItems, setBagItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      // drop any old-format entries that have no id (would collide)
      return Array.isArray(parsed) ? parsed.filter((i) => i && i.id) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bagItems));
    } catch {
      /* storage unavailable */
    }
  }, [bagItems]);

  // On login: merge the server cart with the guest bag (max quantity wins),
  // and push guest-only items up to the server so nothing is lost.
  useEffect(() => {
    if (!isAuthenticated) return;
    let cancelled = false;

    (async () => {
      try {
        const cart = await cartApi.getCart();
        const serverItems = cart?.items || [];
        const serverProducts = await getProductsByIds(serverItems.map((i) => i.productId));
        if (cancelled) return;

        setBagItems((prev) => {
          const merged = prev.map((i) => ({ ...i }));
          serverItems.forEach((si) => {
            const product = serverProducts.find((p) => String(p._id) === String(si.productId));
            if (!product) return;
            const existing = merged.find((i) => i.id === product.id);
            if (existing) {
              existing.quantity = Math.max(existing.quantity, si.quantity);
              existing._id = product._id;
            } else {
              merged.push(slim(product, si.quantity));
            }
          });
          return merged;
        });

        // push local-only items to the server
        const serverIds = new Set(serverItems.map((i) => String(i.productId)));
        const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        local
          .filter((i) => i._id && !serverIds.has(String(i._id)))
          .forEach((i) => cartApi.addCartItem(i._id, i.quantity).catch(() => {}));
      } catch {
        // Server cart unavailable - keep working off the local copy.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  const addToBag = (item, qty = 1) => {
    setBagItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + qty } : i));
      }
      return [...prev, slim(item, qty)];
    });
    if (isAuthenticated && item._id) cartApi.addCartItem(item._id, qty).catch(() => {});
  };

  const removeFromBag = (id) => {
    const item = bagItems.find((i) => i.id === id);
    setBagItems((prev) => prev.filter((i) => i.id !== id));
    if (isAuthenticated && item?._id) cartApi.removeCartItem(item._id).catch(() => {});
  };

  // Backend has no "set quantity" endpoint yet, so on the server we add the
  // difference (or remove + re-add when decreasing). Local state is the
  // source of truth until that endpoint exists.
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromBag(id);
    const item = bagItems.find((i) => i.id === id);
    if (!item) return;
    setBagItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
    if (isAuthenticated && item._id) {
      const diff = quantity - item.quantity;
      if (diff > 0) {
        cartApi.addCartItem(item._id, diff).catch(() => {});
      } else if (diff < 0) {
        cartApi
          .removeCartItem(item._id)
          .then(() => cartApi.addCartItem(item._id, quantity))
          .catch(() => {});
      }
    }
  };

  const clearBag = useCallback(() => {
    setBagItems((prev) => {
      if (isAuthenticated) {
        prev.forEach((i) => i._id && cartApi.removeCartItem(i._id).catch(() => {}));
      }
      return [];
    });
  }, [isAuthenticated]);

  const totalCount = bagItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = bagItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <BagContext.Provider
      value={{ bagItems, addToBag, removeFromBag, updateQuantity, clearBag, totalCount, totalPrice }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  return useContext(BagContext);
}