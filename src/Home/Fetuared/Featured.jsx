import React from "react";
import Section from "../../Component/Section/Section";
import featuresImg from "../.././assets/home/featured.jpg";
import "./index.css";

const Featured = () => {
  return (
    <div className="featured_card pt-10 mt-10 container bg-fixed mx-auto  text-white">
      <Section subHeading={"Check It Out"} heading={"Form Our menu"}></Section>
      <div className="md:flex justify-center items-center gap-6 pb-20 pt-12 px-30">
        <div>
          <img src={featuresImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <p className="uppercase text-[20px] font-semibold">AUG 20,2025</p>
          <p className="uppercase text-[20px] font-semibold">
            Where can i gat some?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam
            reprehenderit porro ipsam odio. Officia voluptatem neque culpa ab!
            Consectetur, ratione nulla? Minus, impedit officia. Cupiditate
            consequuntur voluptate nulla, odit ratione rerum,{" "}
          </p>
          <button className="btn border-b-3 border-b-amber-600 font-semibold rounded-[10px] hover:bg-slate-500 hover:text-pink-500 mt-1">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
