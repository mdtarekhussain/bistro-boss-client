import React from "react";
import Section from "../../Component/Section/Section";

import Menu from "../../Pages/Shared/MenuItem/Menu1";
import useMEnu from "../../Hooks/Hooks";
const Papular = () => {
  const [menu] = useMEnu([]);
  const papular = menu.filter((menu1) => menu1.category === "popular");
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((resizeBy) => resizeBy.json())
  //     .then((data) => {
  //       const PapularMa = data.filter((menu) => menu.category === "popular");
  //       setData(PapularMa);
  //     });
  // }, []);

  return (
    <div className="container mx-auto mt-10">
      <Section
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></Section>
      <div className="grid md:grid-cols-2 gap-8 ">
        {papular.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <div className="text-center mt-4">
        {" "}
        <button className="btn border-b-3 justify-center border-b-amber-600 font-semibold rounded-[10px] hover:bg-slate-500 hover:text-pink-500 mt-1">
          View Full Menu{" "}
        </button>
      </div>
    </div>
  );
};

export default Papular;
