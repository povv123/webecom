import { createContext, useContext, useState, useEffect } from "react";

const BagContext = createContext();

export function BagProvider({ children }) {

  // ✅ Load from localStorage on first render
  const [bagItems, setBagItems] = useState(() => {
    try {
      const stored = localStorage.getItem('bagItems');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // ✅ Save to localStorage every time bagItems changes
  useEffect(() => {
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
  }, [bagItems]);

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
  };

  const removeFromBag = (id) => {
    setBagItems((prev) => prev.filter((i) => i.id !== id));
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