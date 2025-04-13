import Swal from "sweetalert2";
import Section from "../../../Component/Section/Section";
import useMEnu from "../../../Hooks/Hooks";
// import useAxios from "../../../Hooks/useAxios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [data, , refetch] = useMEnu();
  const axiosSecure = useAxios();
  const handelDelete = (item) => {
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
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${res.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  // const handleEdit = (item1) => {};
  return (
    <div>
      <Section heading={"Manage All Item"} subHeading="Hurry up"></Section>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>EDIT</th>
                <th>DELETE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <Link
                      to={`/dashboard/update/${item._id}
                    `}
                    >
                      <button
                        // onClick={() => handleEdit(item)}

                        className="btn bg-orange-500 btn-ghost btn-lg"
                      >
                        <FaEdit className="text-white "></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handelDelete(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
