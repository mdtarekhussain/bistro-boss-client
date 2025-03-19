import Cover from "../../Shared/Cover/Cover";
import img1 from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMEnu from "../../../Hooks/Hooks";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import TabCard from "../../../Component/FoodCard/TabCard/TabCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soups", "dessert", "drinks"];

  const { category } = useParams();
  const indexs = categories.indexOf(category);
  const [tabIndex, setIndex] = useState(indexs);
  const [menu] = useMEnu();

  const dessert = menu.filter((menu1) => menu1.category === "dessert");
  const pizza = menu.filter((menu1) => menu1.category === "pizza");
  const salad = menu.filter((menu1) => menu1.category === "salad");
  const drinks = menu.filter((menu1) => menu1.category === "drinks");
  const soup = menu.filter((menu1) => menu1.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss! Order Food</title>
      </Helmet>
      <Cover img={img1} title={"OUR SHOP"}></Cover>
      <div className="container mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <TabCard items={salad}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={pizza}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={soup}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={dessert}></TabCard>
          </TabPanel>
          <TabPanel>
            <TabCard items={drinks}></TabCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
