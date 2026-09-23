import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const queryClient = useQueryClient();

  // নতুন API কল
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/viewOrder"); // নতুন API কল
      return res.data;
    },
  });

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/carts/${id}`);
          queryClient.invalidateQueries(["cart"]); // কার্ট ডাটা রিফ্রেশ
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        } catch (error) {
          console.error("Delete failed:", error);
          Swal.fire("Error!", "Failed to delete item.", "error");
        }
      }
    });
  };

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="container mt-16 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-left">
            <button
              onClick={handleCheckout}
              className="btn btn-primary "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;