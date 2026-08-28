import { createContext, useContext, useState } from "react";

const SaveContext = createContext();

export function SaveProvider({ children }) {
  const [savedItems, setSavedItems] = useState([]);

  const addToSaves = (item) => {
    setSavedItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev; // already saved, don't duplicate
      return [...prev, item];
    });
  };

  const removeFromSaves = (id) => {
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
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