import { NavLink } from "react-router-dom";
import { useGetSuppliesQuery } from "../../redux/features/supplies/suppliesApi";
import CardSupplies from "../AllSupplies/CardSupplies";
import { TSupplyInfo } from "../../types/supplyTypes";

const Supplies = () => {
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

  return (
    <div className="text-center w-11/12 mx-auto py-12">
      <h1 className="text-5xl font-bold pb-8">Supplies</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 space-y-5">
        {data.slice(0, 6).map((info: TSupplyInfo) => (
          <CardSupplies key={info._id} info={info} />
        ))}
      </div>
      <div className="pt-10">
        <button className="bg-blue-300 px-4 py-2 rounded-lg">
          <NavLink to="/supplies">View More</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Supplies;
