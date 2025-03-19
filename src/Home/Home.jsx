import { Helmet } from "react-helmet-async";
import Bistro from "./Bistro/Bistro ";
import Category from "./Category/Category";
import Chaff from "./Chaff/Chaff";
import Featured from "./Fetuared/Featured";
import Banner from "./Home/Banner/Banner";
import Contact from "./Home/Contact/Contact";
import Popular from "./PapularManu/Papular";
import TESTIMONIALS from "./TESTIMONIALS";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss! Home</title>
      </Helmet>
      <div>
        <Banner></Banner>

        <Category></Category>
        <Bistro></Bistro>
        <Popular></Popular>
        <Contact></Contact>
        <Chaff></Chaff>
        <Featured></Featured>
        <TESTIMONIALS></TESTIMONIALS>
      </div>
    </>
  );
};

export default Home;
