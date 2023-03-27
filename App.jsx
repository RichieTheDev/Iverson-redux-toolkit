import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./src/components/Home";
import Navbar from "./src/components/Navbar";
import Modal from "./src/components/Modal";
import Cart from "./src/pages/Cart";
import { calculateTotal } from "./src/features/cart/cartSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { Items } = useSelector((state) => state.cart);
  const { isopen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [Items]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Modal" element={isopen && <Modal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
