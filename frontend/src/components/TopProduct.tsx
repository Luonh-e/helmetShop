import React from "react";
import axios from "axios";
import Loading from "./Loading";
import ProductItem from "./ProductItem";
import { useQuery } from "@tanstack/react-query";

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
  const { data } = await axios.get(
    "https://script.google.com/macros/s/AKfycbz1uk4PtC2kXvxVo2MeChBOlAzRNBN4g4j0J-JDCfiuL6yxx-sdnO5EXmO37bg4pCeSgA/exec"
  );
  return data;
};

const TopProduct: React.FC = () => {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["topProducts"],
    queryFn: fetchProducts,
  });

  console.log(products);

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-orange-500 font-bold text-m tracking-wider">
          MŨ BẢO HIỂM BÁN CHẠY
        </span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {isLoading && <Loading />}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
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
    </div>
  );
};

export default TopProduct;
