import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      <img className="w-28 cursor-pointer" src={assets.logo} alt="" />
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
      <div className="flex items-center space-x-4">
        <div className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full">
          <i className="fa-solid fa-magnifying-glass text-l"></i>
        </div>
        <div className="h-8 border-l-2 border-gray-400"></div>
        <div
          onClick={goToCart}
          className="hover:bg-black hover:cursor-pointer hover:text-white flex items-center justify-center w-10 h-10 border border-black rounded-full"
        >
          <i className="fa-solid fa-bag-shopping text-l"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
