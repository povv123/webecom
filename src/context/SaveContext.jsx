import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import * as wishlistApi from "../API/wishlist";
import { getProductsByIds } from "../API/products";

const SaveContext = createContext();
const STORAGE_KEY = "savedItems";

export function SaveProvider({ children }) {
  const { isAuthenticated } = useAuth() || {};

  const [savedItems, setSavedItems] = useState(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed.filter((i) => i && i.id) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems));
    } catch {
      /* storage unavailable */
    }
  }, [savedItems]);

  // On login: load the server wishlist as full products and merge it with
  // whatever the guest saved locally (then push guest-only saves up).
  useEffect(() => {
    if (!isAuthenticated) return;
    let cancelled = false;

    (async () => {
      try {
        const wishlist = await wishlistApi.getWishlist();
        const ids = wishlist?.productIds || [];
        const products = await getProductsByIds(ids);
        if (cancelled) return;

        setSavedItems((prev) => {
          const merged = [...prev];
          products.forEach((p) => {
            if (!merged.some((i) => i.id === p.id)) merged.push(p);
          });
          return merged;
        });

        const serverIds = new Set(ids.map(String));
        const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        local
          .filter((i) => i._id && !serverIds.has(String(i._id)))
          .forEach((i) => wishlistApi.addWishlistItem(i._id).catch(() => {}));
      } catch {
        /* wishlist unavailable - keep local copy */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  const addToSaves = (item) => {
    setSavedItems((prev) => (prev.some((i) => i.id === item.id) ? prev : [...prev, item]));
    if (isAuthenticated && item._id) wishlistApi.addWishlistItem(item._id).catch(() => {});
  };

  const removeFromSaves = (id) => {
    const item = savedItems.find((i) => i.id === id);
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
    if (isAuthenticated && item?._id) wishlistApi.removeWishlistItem(item._id).catch(() => {});
  };

  const issaved = (id) => savedItems.some((i) => i.id === id);

  return (
    <SaveContext.Provider value={{ savedItems, addToSaves, removeFromSaves, issaved }}>
      {children}
    </SaveContext.Provider>
  );
}

export function useSave() {
  return useContext(SaveContext);
}