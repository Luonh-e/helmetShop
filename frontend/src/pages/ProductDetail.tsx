import { useLocation } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const { image, name, price, oldPrice, rating, discount } = state || {};

  const haveDiscount = discount !== 0;

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={image}
            alt="Nón bảo hiểm Fullface Barock sợi thủy tinh cao cấp"
            className="max-w-full h-80"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">{name}</h1>
          <div className="flex text-yellow-400">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
          {haveDiscount && (
            <div className="text-gray-500 line-through text-m">
              {formatPrice(oldPrice)}.000 VNĐ
            </div>
          )}
          <div className="text-red-500 text-3xl font-bold mb-4">
            {formatPrice(price)}.000 VNĐ
          </div>
          <ul className="space-y-1 text-sm mb-6">
            <li>Chất liệu cao cấp sợi thủy tinh fiberglass</li>
            <li>Màu sắc: đen bóng, phối vàng.</li>
            <li>Đạt tiêu chuẩn Âu Châu ECE R22.05</li>
            <li>Gọn nhẹ, an toàn, phù hợp với thể trạng người Việt Nam.</li>
          </ul>

          {/* Thông tin thêm */}
          <table className="w-full mb-6 text-sm">
            <tbody>
              <tr>
                <td className="font-semibold">Thương hiệu:</td>
                <td>
                  Barock |{" "}
                  <a href="#" className="text-orange-500">
                    Xem thêm
                  </a>
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Tiêu chuẩn:</td>
                <td>Tiêu chuẩn Châu Âu ECE 22.05</td>
              </tr>
              <tr>
                <td className="font-semibold">Mã sản phẩm:</td>
                <td>1105030003</td>
              </tr>
              <tr>
                <td className="font-semibold">Xuất xứ:</td>
                <td>Trung Quốc</td>
              </tr>
            </tbody>
          </table>

          {/* Chính sách hỗ trợ */}
          <div className="border border-red-500 bg-red-50 p-4 rounded-md space-y-2 text-sm">
            <p>
              ✔ Cam kết chính hãng tất cả sản phẩm cung cấp tại ONGHOANGNONMU
            </p>
            <p>✔ Bảo hành 3 năm đối với nón bảo hiểm và 5 năm đối với vali</p>
            <p>✔ Giao hàng miễn phí toàn quốc (Áp dụng đơn hàng &gt;500.000)</p>
            <p>
              ✔ Giặt mũ miễn phí trọn đời (Chỉ áp dụng với mũ còn tem của shop)
            </p>
          </div>

          {/* Nút hành động */}
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white py-3 px-6 uppercase font-bold hover:bg-white hover:border hover:text-black transition">
              Thêm vào giỏ hàng
            </button>
            <button className="bg-black text-white py-3 px-6 uppercase font-bold hover:bg-white hover:border hover:text-black transition">
              Gọi 0333.017.242
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
