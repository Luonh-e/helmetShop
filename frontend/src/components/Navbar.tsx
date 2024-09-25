import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const goToCart = () => {
    navigate("/cart");
  };

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearch = () => {
    console.log("Đang search");
    // xử lý xự kiện tìm kiếm
  };

  const closeSearch = () => {
    setShowSearchInput(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
        {" "}
        <img className="w-28 cursor-pointer" src={assets.logo} alt="" />
        <ul className="md:flex items-start gap-5 font-medium hidden">
          <NavLink to="/">
            <li className="py-2">NÓN BẢO HIỂM</li>
          </NavLink>
          <NavLink to="/accessory">
            <li className="py-2">PHỤ KIỆN</li>
          </NavLink>
          <NavLink to="/promotion">
            <li className="py-2">KHUYẾN MÃI</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-2">LIÊN HỆ</li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-2">GIỚI THIỆU</li>
          </NavLink>
        </ul>
        <div className="flex items-center space-x-4">
          <div
            className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
            onClick={handleSearchIconClick}
          >
            <i className="fa-solid fa-magnifying-glass text-l"></i>
          </div>
          <div
            onClick={goToCart}
            className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
          >
            <i className="fa-solid fa-bag-shopping text-l"></i>
          </div>
        </div>
      </div>
      {showSearchInput && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75"
          onClick={closeSearch}
        >
          {" "}
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
