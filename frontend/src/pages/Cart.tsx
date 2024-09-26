import React from "react";
import { useShoppingContext } from "../contexts/ShoppingContext";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cartItems, totalPrice, increaseQty, decreaseQty } =
    useShoppingContext();

  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto p-6">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-sm text-left">
            <th className="py-3 px-4 border-b">SẢN PHẨM</th>
            <th className="py-3 px-4 border-b">GIÁ</th>
            <th className="py-3 px-4 border-b">SỐ LƯỢNG</th>
            <th className="py-3 px-4 border-b">TỔNG</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.ID} className="border-b">
              <td className="py-4 px-4 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover mr-4"
                />
                <div className="hidden sm:inline flex justify-between items-center w-full">
                  <h6 className="text-m">{item.name}</h6>
                </div>
              </td>
              <td>
                <div className="text-red-600 font-bold">
                  {formatPrice(item.price)}.000
                </div>
              </td>
              <td className="mb-10 flex items-center">
                <button
                  onClick={() => decreaseQty(item.ID)}
                  className="bg-gray-200 p-1 h-6 w-6 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.qty}
                  readOnly
                  className="mx-2 w-6 text-center border rounded"
                />
                <button
                  onClick={() => increaseQty(item.ID)}
                  className="bg-gray-200 h-6 w-6 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </td>
              <td>
                <div className="text-red-600 font-bold">
                  {formatPrice(item.price * item.qty)}.000
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-md">
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <button
            onClick={goToCheckout}
            className="bg-black text-white py-3 px-6 uppercase font-bold hover:bg-white hover:text-black transition mt-4 sm:mt-0"
          >
            TIẾN HÀNH THANH TOÁN
          </button>
          <div className="text-left sm:text-right">
            <p className="mt-2">Tạm tính: {formatPrice(totalPrice)}.000 VNĐ</p>
            <p className="font-bold">Tổng: {formatPrice(totalPrice)}.000 VNĐ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
