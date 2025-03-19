const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="card bg-[#F3F3F3] shadow-sm">
      {" "}
      <figure>
        <img
          className="w-full h-[350px]  bg-cover bg-repeat"
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="text-white bg-stone-900 right-3 p-2 px-3 rounded-lg mt-3 absolute">
        {price}$
      </p>
      <div className="card-body text-center space-y-2">
        <h2 className="text-center text-2xl font-semibold">{name}</h2>
        <p className="text-[18px] font-[500]">{recipe}</p>

        <div className="card-actions justify-center">
          <button className="btn uppercase border-2 bg-slate-300 text-[20px] font-semibold border-b-amber-500 rounded-lg hover:bg-[#1F2937] text-black hover:text-yellow-400">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
