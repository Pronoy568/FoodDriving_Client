import { Pie, PieChart, Tooltip } from "recharts";
import { useGetSuppliesQuery } from "../../redux/features/supplies/suppliesApi";
import { TSupplyInfo } from "../../types/supplyTypes";

const Dashboard = () => {
  const { data, isError, isLoading } = useGetSuppliesQuery(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-5">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (isError) {
    return <p>Something is wrong !!!</p>;
  }

  const data01 = data.map((info: TSupplyInfo) => ({
    name: info.title,
    value: Number(info.quantity),
  }));

  const data02 = data.map((info: TSupplyInfo) => ({
    name: info.category,
    value: Number(info.quantity),
  }));

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">PieChart</h1>
        <p className="text-[#8884d8] text-xl">
          Outer radius shows Title with Quantity
        </p>
        <p className="text-[#82ca9d] text-xl">
          Inner radius shows Category with Quantity
        </p>
      </div>
      <div className="flex items-center justify-center">
        <PieChart width={500} height={200}>
          <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
