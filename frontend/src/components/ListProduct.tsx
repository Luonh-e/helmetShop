import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

interface Product {
  ID: number;
  Name?: string;
  Sale?: number;
  Price?: number;
  Img?: string;
  Discount?: number;
  Dspt?: string;
}

const fetchProducts = async () => {
  const { data } = await axios.post(
    "https://script.google.com/macros/s/AKfycbzwuzliZksW4BAPixQqZLiMKY_iqvbTfLcASKhP219bfd109Mzi-7O4PGJwGcvj9k9D/exec?param=products"
  );
  return data;
};

const ListProduct: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(10); // Initially load 10 products

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 10); // Load 10 more products each time
  };

  if (isError) {
    return (
      <div>
        Error:{" "}
        {error instanceof Error ? error.message : "Error fetching products"}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-orange-500 font-bold text-m tracking-wider">
          GỢI Ý DÀNH CHO BẠN
        </span>
        <hr className="flex-grow border-gray-300" />
      </div>

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

export default ListProduct;
