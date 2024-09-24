import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Product {
  ID: number;
  Name?: string;
  Price: number;
  Img?: string;
}

const TopProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const goToProductDetail = (id: number) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzwuzliZksW4BAPixQqZLiMKY_iqvbTfLcASKhP219bfd109Mzi-7O4PGJwGcvj9k9D/exec?param=products"
      )
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.ID}
          onClick={() => goToProductDetail(product.ID)}
          className="border p-4"
        >
          <img
            src={product.Img}
            alt={product.Name}
            className="w-full h-48 object-cover"
          />
          <h2 className="text-lg font-bold">{product.Name}</h2>
        </div>
      ))}
    </div>
  );
};

export default TopProduct;
