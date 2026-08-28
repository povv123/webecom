import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import * as cartApi from "../API/cart";

const BagContext = createContext();

export function BagProvider({ children }) {
  const { isAuthenticated } = useAuth() || {};

  const [bagItems, setBagItems] = useState(() => {
    try {
      const stored = localStorage.getItem('bagItems');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
  }, [bagItems]);

  // On login, pull the server-side cart and merge it into whatever the
  // guest already had in localStorage (union by product id, quantities added).
  useEffect(() => {
    if (!isAuthenticated) return;

    cartApi
      .getCart()
      .then((cart) => {
        setBagItems((prev) => {
          const merged = [...prev];
          cart.items.forEach((serverItem) => {
            const existing = merged.find((i) => i._id === serverItem.productId);
            if (existing) {
              existing.quantity = Math.max(existing.quantity, serverItem.quantity);
            }
          });
          return merged;
        });
      })
      .catch(() => {
        // Server cart unavailable - keep working off the local copy.
      });
  }, [isAuthenticated]);

  const addToBag = (item) => {
    setBagItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    if (isAuthenticated && item._id) {
      cartApi.addCartItem(item._id, 1).catch(() => {});
    }
  };

  const removeFromBag = (id) => {
    const item = bagItems.find((i) => i.id === id);
    setBagItems((prev) => prev.filter((i) => i.id !== id));

    if (isAuthenticated && item?._id) {
      cartApi.removeCartItem(item._id).catch(() => {});
    }
  };

  const totalCount = bagItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = bagItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <BagContext.Provider value={{ bagItems, addToBag, removeFromBag, totalCount, totalPrice }}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  return useContext(BagContext);
}
