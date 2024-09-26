import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

interface ProductItemProps {
  ID: number;
  image: string | undefined;
  name: string | undefined;
  price: number | undefined;
  oldPrice: number | undefined;
  rating: number;
  discount?: number;
  dspt?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  ID,
  image = assets.product,
  name = "",
  price = 99999999,
  oldPrice = 99999999,
  rating,
  discount,
}) => {
  const haveDiscount = discount !== 0;

  const navigate = useNavigate();

  const handleGoToDetail = () => {
    const productDetails = {
      ID,
      image,
      name,
      price,
      oldPrice,
      rating,
      discount,
    };

    navigate(`/${ID}`, { state: productDetails });
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div
      onClick={handleGoToDetail}
      className="cursor-pointer flex flex-col items-center space-y-2 p-4 cu"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-38 object-cover" />
        {haveDiscount && (
          <div className="absolute top-0 right-0 bg-orange-500 text-white rounded-full p-2 text-sm">
            -{discount}%
          </div>
        )}
      </div>
      <div className="text-center text-sm font-semibold">
        {name.length > 30 ? `${name.substring(0, 30)}...` : name}
      </div>
      <div className="flex justify-center text-yellow-400">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
      {haveDiscount && (
        <div className="text-gray-500 line-through text-m">
          {formatPrice(oldPrice)}.000 VNĐ
        </div>
      )}
      <div className="text-red-600 font-bold">{formatPrice(price)}.000 VNĐ</div>
    </div>
  );
};

export default ProductItem;
