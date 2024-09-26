import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useShoppingContext } from "../contexts/ShoppingContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useShoppingContext();

  const goToCart = () => {
    navigate("/cart");
  };

  const goHome = () => {
    navigate("/");
  };

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearch = () => {
    console.log("Tìm kiếm sản phẩm...");
  };

  const closeSearch = () => {
    setShowSearchInput(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
        <img
          onClick={goHome}
          className="w-28 cursor-pointer"
          src={assets.logo}
          alt=""
        />{" "}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
          >
            <i className="fa-solid fa-bars text-l"></i>
          </button>
          <div
            className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
            onClick={handleSearchIconClick}
          >
            <i className="fa-solid fa-magnifying-glass text-l"></i>
          </div>

          <div
            onClick={goToCart}
            className="relative hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
          >
            <i className="fa-solid fa-bag-shopping text-l"></i>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
        <ul className="md:flex items-start gap-5 font-medium hidden">
          <NavLink to="/">
            <li className="py-2">NÓN BẢO HIỂM</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/accessory">
            <li className="py-2">PHỤ KIỆN</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/promotion">
            <li className="py-2">KHUYẾN MÃI</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-2">LIÊN HỆ</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-2">GIỚI THIỆU</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
            onClick={handleSearchIconClick}
          >
            <i className="fa-solid fa-magnifying-glass text-l"></i>
          </div>
          <div
            onClick={goToCart}
            className="relative hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
          >
            <i className="fa-solid fa-bag-shopping text-l"></i>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={closeMenu}
        >
          <div
            className="md:hidden absolute left-0 right-0 top-8 w-5/6 bg-white z-50 p-4 border border-gray-300 rounded-lg shadow-lg mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col items-center gap-4 font-medium">
              <NavLink to="/" onClick={closeMenu}>
                <li className="py-2">NÓN BẢO HIỂM</li>
              </NavLink>
              <NavLink to="/accessory" onClick={closeMenu}>
                <li className="py-2">PHỤ KIỆN</li>
              </NavLink>
              <NavLink to="/promotion" onClick={closeMenu}>
                <li className="py-2">KHUYẾN MÃI</li>
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu}>
                <li className="py-2">LIÊN HỆ</li>
              </NavLink>
              <NavLink to="/about" onClick={closeMenu}>
                <li className="py-2">GIỚI THIỆU</li>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
      {showSearchInput && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75"
          onClick={closeSearch}
        >
          <div
            className="absolute top-32 left-0 w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              className="w-3/4 shadow-md p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
