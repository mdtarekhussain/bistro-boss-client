import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { FaUsers, FaWallet } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: stats = [] } = useQuery({
    queryKey: ["payment-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payment-stats");
      return res.data;
    },
  });
  const { data: chart = [] } = useQuery({
    queryKey: ["order_stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const paiChartData = chart.map((data) => {
    return { name: data.category, value: data.revenue };
  });
  return (
    <div>
      <h1 className="text-4xl text-[#151515] ">
        Hi, Welcome
        <span className="italic text-orange-400">
          {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h1>

      <div className=" flex justify-between gap-5 items-center mt-4">
        <div className="stat flex place-items-center rounded-lg text-white justify-center  bg-linear-65 from-[#BB34F5] 0% to-[#FCDBFF] 100%">
          <FaWallet className="w-[50px]  h-[50px]" />
          <div>
            <div className="stat-value">${stats.revenue}</div>
            <div className="text-2xl">Revenue</div>
          </div>
        </div>
        <div className="stat flex place-items-center rounded-lg justify-center text-white bg-[linear-gradient(65deg,_#D3A256_0%,_#FDE8C0_100%)]">
          <FaUsers className="w-[50px]  h-[50px]" />
          <div>
            <div className="stat-value">{stats.users}</div>
            <div className="text-2xl">Customers</div>
          </div>
        </div>
        <div className="stat flex place-items-center rounded-lg text-white justify-center bg-linear-65 from-[#FE4880] 0% to-[#FECDE9] 100%">
          <RiMenuSearchLine className="w-[50px]  h-[50px]" />
          <div>
            <div className="stat-value">{stats.menuItem}</div>
            <div className="text-2xl">Products</div>
          </div>
        </div>
        <div className="stat flex place-items-center rounded-lg text-white justify-center  bg-linear-65 from-[#6AAEFF] 0% to-[#B6F7FF] 100%">
          <LiaCarSideSolid className="w-[50px]  h-[50px]" />
          <div>
            <div className="stat-value">{stats.order}</div>
            <div className="text-2xl">Orders</div>
          </div>
        </div>
      </div>
      <div className="flex gap-7">
        <div>
          <BarChart
            width={500}
            height={300}
            data={chart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chart.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div>
          <PieChart width={400} height={400}>
            <Pie
              data={paiChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {paiChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
