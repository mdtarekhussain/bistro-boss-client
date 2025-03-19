const Menu1 = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-center gap-4 mt-10">
      <img
        style={{ borderRadius: "0px  200px 200px 200px" }}
        className="w-[130px] "
        src={image}
        alt=""
      />
      <div>
        <h1 className="uppercase">{name}--------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}$</p>
    </div>
  );
};

export default Menu1;
