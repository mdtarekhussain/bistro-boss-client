import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1>Total Payments {payments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#D1A054]  ">
            <tr className="text-[22px] font-[500]">
              <th>#</th>
              <th>Email</th>

              <th>TOTAL PRICE</th>
              <th>PAYMENT DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, index) => (
              <tr className="text-[18px] font-[500]" key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>

                <td>{item.price}$</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
