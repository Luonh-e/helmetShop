import React, { useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";

interface Product {
  ID: number;
  Name?: string;
  Sale?: number;
  Price?: number;
  Img?: string;
  Discount: number;
  Dspt?: string;
}

const fetchProducts = async () => {
  const { data } = await axios.post(
    "https://script.google.com/macros/s/AKfycbzwuzliZksW4BAPixQqZLiMKY_iqvbTfLcASKhP219bfd109Mzi-7O4PGJwGcvj9k9D/exec?param=accessories"
  );
  return data;
};

const Accessory: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(10);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["accessories"],
    queryFn: fetchProducts,
  });

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 10);
  };

  return (
    <div>
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductItem
            key={index}
            ID={product.ID}
            image={product.Img}
            name={product.Name}
            price={product.Sale}
            oldPrice={product.Price}
            rating={4}
            discount={product.Discount}
            dspt={product.Dspt}
          />
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300"
            onClick={loadMoreProducts}
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default Accessory;
