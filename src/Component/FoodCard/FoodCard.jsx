import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";
const FoodCard = ({ item }) => {
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const handleAddToCard = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        price,
        image,
        name,
      };
      axiosSecure.post("http://localhost:5000/cards", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${name}added to your cart`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Are you not logged it",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCard(item)}
            className="btn uppercase border-2 bg-slate-300 text-[20px] font-semibold border-b-amber-500 rounded-lg hover:bg-[#1F2937] text-black hover:text-yellow-400"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
