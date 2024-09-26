import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accessory from "./pages/Accessory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Promotion from "./pages/Promotion";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

import Checkout from "./pages/Checkout";
import { ShoppingContextProvider } from "./contexts/ShoppingContext";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ShoppingContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {<Footer />}
      </ShoppingContextProvider>
    </div>
  );
};

export default App;
