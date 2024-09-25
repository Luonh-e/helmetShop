const Cart: React.FC = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold uppercase mb-4">
            Thông tin thanh toán
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Họ tên người nhận hàng *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
                  placeholder="Tên của bạn"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold">
                  Số điện thoại *
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold">
                Địa chỉ *
              </label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
                placeholder="Địa chỉ"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-semibold">
                  Tỉnh / Thành phố *
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
                  placeholder="Tỉnh/Thành phố"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Địa chỉ email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="note" className="block text-sm font-semibold">
                Thông tin bổ sung
              </label>
              <textarea
                id="note"
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-gray-400"
                placeholder="Ghi chú về đơn hàng (tùy chọn)"
              />
            </div>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold uppercase mb-4">Đơn hàng của bạn</h2>

          <div className="border-t border-gray-300 py-4">
            <div className="flex justify-between text-sm">
              <span>Sản phẩm</span>
              <span>Tạm tính</span>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span>
                Mũ bảo hiểm 3/4 Royal M139 Kính Âm (Size M Đen Mờ) × 1
              </span>
              <span>450.000 VNĐ</span>
            </div>

            <div className="border-t border-gray-300 py-4 mt-4 flex justify-between text-sm">
              <span>Tổng</span>
              <span className="font-bold">450.000 VNĐ</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">
              Phương thức thanh toán
            </h3>

            <div className="space-y-4">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-black"
                    checked
                  />
                  <span className="ml-2">Chuyển khoản ngân hàng</span>
                </label>
                <p className="text-sm text-gray-600 mt-1">
                  Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng
                  tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung
                  thanh toán.
                </p>
              </div>

              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-black"
                  />
                  <span className="ml-2">Trả tiền mặt khi nhận hàng</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-black text-white py-3 uppercase font-bold hover:bg-gray-800 transition">
              Đặt hàng
            </button>
            <p className="text-xs text-gray-500 mt-4">
              Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng
              trải nghiệm sử dụng website, và cho các mục đích cụ thể khác đã
              được mô tả trong chính sách riêng tư.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
