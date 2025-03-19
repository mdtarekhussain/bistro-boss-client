import { Helmet } from "react-helmet-async";
import Cover from "../../Pages/Shared/Cover/Cover";
import img1 from "../../assets/menu/banner3.jpg";
import img2 from "../../assets/menu/dessert-bg.jpeg";
import img3 from "../../assets/menu/pizza-bg.jpg";
import img4 from "../../assets/menu/salad-bg.jpg";
import img5 from "../../assets/menu/soup-bg.jpg";
import Papular from "../../Home/PapularManu/Papular";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMEnu from "../../Hooks/Hooks";
import Section from "../../Component/Section/Section";
const Menu = () => {
  const [menu] = useMEnu([]);

  const dessert = menu.filter((menu1) => menu1.category === "dessert");
  const pizza = menu.filter((menu1) => menu1.category === "pizza");
  const salad = menu.filter((menu1) => menu1.category === "salad");
  const offered = menu.filter((menu1) => menu1.category === "offered");
  const soup = menu.filter((menu1) => menu1.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss! Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={img1} title={"our menu"}></Cover>
      <Section
        subHeading="---Don't miss---"
        heading={"TODAY'S OFFER"}
      ></Section>
      {/* menu offered */}
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title="Dessert" img={img2}></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={img3}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={img4}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={img5}></MenuCategory>
    </div>
  );
};

export default Menu;
