const Footer: React.FC = () => {
  return (
    <footer className="text-black mt-16 mb-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {" "}
        <div>
          <h2 className="text-lg font-bold mb-4">ABOUT ONGHOANGNONMU</h2>
          <p className="text-sm">
            Ông Hoàng nón mũ ra đời với 3 giá trị mà chúng tôi luôn kiên định
            theo đuổi: <strong>High Quality</strong> (Chất lượng cao),{" "}
            <strong>Affordable</strong> (Giá phải chăng),{" "}
            <strong>Personalities</strong> (Cá tính).
          </p>
          <p className="mt-4">
            Tại Ông Hoàng nón mũ, không chỉ là an toàn, trên hết cá tính còn cần
            được tôn vinh.
          </p>
          <a href="#" className="text-orange-500 mt-2 block">
            » Xem thêm
          </a>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">THÔNG TIN VỀ CHÚNG TÔI</h2>
          <ul className="text-sm space-y-2">
            <li>» Giới thiệu về chúng tôi</li>
            <li>» Chính sách bảo hành sản phẩm</li>
            <li>
              » Chính sách dành cho đại lý{" "}
              <span className="bg-red-500 text-white rounded px-2 py-1 text-xs">
                HOT
              </span>
            </li>
            <li>
              » Mũ bảo hiểm làm quà tặng{" "}
              <span className="bg-red-500 text-white rounded px-2 py-1 text-xs">
                HOT
              </span>
            </li>
            <li>
              » Địa chỉ cửa hàng{" "}
              <span className="bg-green-500 text-white rounded px-2 py-1 text-xs">
                GOOD
              </span>
            </li>
            <li>» Chính sách bảo mật</li>
            <li>» Chính sách đổi, trả sản phẩm</li>
            <li>» Thanh toán và giao nhận</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">CỬA HÀNG CỦA CHÚNG TÔI</h2>
          <ul className="text-sm space-y-2">
            <li>
              » Hoàng Anh Store 01 - 16a/4 khu phố Bình Đáng, Bình Hoà, TP Thuận
              An, Bình Dương
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">TỪ KHÓA PHỔ BIẾN</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              BAROCK
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM 3/4
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM 3/4 KÍNH ÂM
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM 3/4 KÍNH ÂM ROYAL M139
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM ANDES
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM BAROCK
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM NAPOLI
            </span>
            <span className="bg-gray-800 text-white rounded px-3 py-1 text-xs">
              MŨ BẢO HIỂM NOLAN
            </span>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="text-center mt-8 text-sm">
        <p>© 2024 ONGHOANGNONMU. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
