import BrandMenu from "../components/BrandMenu";
import Header from "../components/Header";
import TopProduct from "../components/TopProduct";

const Home = () => {
  return (
    <div>
      {<Header />}
      {<BrandMenu />}
      {<TopProduct />}
    </div>
  );
};

export default Home;
