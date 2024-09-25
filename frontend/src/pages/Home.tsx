import BrandMenu from "../components/BrandMenu";
import Header from "../components/Header";
import ListProduct from "../components/ListProduct";
import TopProduct from "../components/TopProduct";

const Home = () => {
  return (
    <div>
      {<Header />}
      {<TopProduct />}
      {<BrandMenu />}
      {<ListProduct />}
    </div>
  );
};

export default Home;
