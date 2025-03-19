import React from "react";
import Section from "../../Component/Section/Section";

import Menu1 from "../../Pages/Shared/MenuItem/Menu1";
import Cover from "../../Pages/Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="container mx-auto mt-10 mb-10">
        <div className="grid md:grid-cols-2 gap-8 ">
          {items.map((item) => (
            <Menu1 key={item._id} item={item}></Menu1>
          ))}
        </div>
        <div className="text-center mt-4">
          {" "}
          <Link to={`/outShop/${title}`}>
            <button className="btn border-b-3 justify-center border-b-amber-600 font-semibold rounded-[10px] hover:bg-slate-500 hover:text-pink-500 mt-1">
              ORDER YOUR FAVOURITE FOOD{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
