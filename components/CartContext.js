import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Cargar carrito guardado al iniciar
  useEffect(() => {
    try {
      const saved = localStorage.getItem("alivio-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      console.error("No se pudo leer el carrito guardado", e);
    }
    setLoaded(true);
  }, []);

  // Guardar cada vez que cambia
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("alivio-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  function addItem(producto, cantidad = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === producto.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === producto.slug ? { ...i, cantidad: i.cantidad + cantidad } : i
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  }

  function updateQty(slug, cantidad) {
    if (cantidad <= 0) {
      removeItem(slug);
      return;
    }
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, cantidad } : i)));
  }

  function removeItem(slug) {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const count = items.reduce((sum, i) => sum + i.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQty, removeItem, clearCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
