import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Orders } from "./pages/orders/Orders";
import { Tracking } from "./pages/tracking";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function loadCartItems() {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    }

    loadCartItems();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<Orders cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
