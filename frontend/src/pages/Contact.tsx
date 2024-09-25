const Contact = () => {
  return (
    <div>
      <h2 className="text-lg font-bold uppercase mb-4">Contact Us</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Họ tên *
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
        <button className="w-full bg-black text-white py-3 uppercase font-bold hover:bg-gray-800 transition">
          LIÊN HỆ
        </button>
      </form>
    </div>
  );
};

export default Contact;
