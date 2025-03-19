import FoodCard from "../FoodCard";

const TabCard = ({ items }) => {
  // const data = items;
  // const total = 10;
  // const numberPage = Math.ceil(data / total);
  // const pages = [...Array(numberPage).keys()];
  return (
    <div className="grid md:grid-cols-3 gap-8 ">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
      {/* <div>
        {pages.map((page) => (
          <button>{page}</button>
        ))}
      </div> */}
    </div>
  );
};

export default TabCard;
