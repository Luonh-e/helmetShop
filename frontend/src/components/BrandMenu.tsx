import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

interface DataType {
  id?: number;
  name?: string;
  img?: string;
}

const BrandMenu = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);

  setLoading(true);
  useEffect(() => {
    const brandMenuData = [
      { img: assets.brdChita },
      { img: assets.brdBell },
      { img: assets.brdHjc },
      { img: assets.brdAgv },
      { img: assets.brdRoyal },
      { img: assets.brdNolan },
    ];
    setData(brandMenuData);
  }, []);

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-8 flex flex-row space-x-8">
      {data.map((brand) => (
        <div key={brand.id}>
          <img src={brand.img} alt={brand.name} className="w-50 h-50" />
        </div>
      ))}
    </div>
  );
};

export default BrandMenu;
