import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import * as wishlistApi from "../API/wishlist";

const SaveContext = createContext();

export function SaveProvider({ children }) {
  const { isAuthenticated } = useAuth() || {};
  const [savedItems, setSavedItems] = useState([]);

  // On login, pull the server-side wishlist in as saved product ids -
  // full product details for those ids are already in savedItems if the
  // guest saved them locally first; otherwise they just won't render here
  // until the user revisits the product.
  useEffect(() => {
    if (!isAuthenticated) return;
    wishlistApi.getWishlist().catch(() => {});
  }, [isAuthenticated]);

  const addToSaves = (item) => {
    setSavedItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });

    if (isAuthenticated && item._id) {
      wishlistApi.addWishlistItem(item._id).catch(() => {});
    }
  };

  const removeFromSaves = (id) => {
    const item = savedItems.find((i) => i.id === id);
    setSavedItems((prev) => prev.filter((i) => i.id !== id));

    if (isAuthenticated && item?._id) {
      wishlistApi.removeWishlistItem(item._id).catch(() => {});
    }
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
