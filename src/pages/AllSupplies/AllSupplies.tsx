import { useGetSuppliesQuery } from "../../redux/features/supplies/suppliesApi";
import { useAppSelector } from "../../redux/hooks";
import { TSupplyInfo } from "../../types/supplyTypes";
import CardSupplies from "./CardSupplies";

const AllSupplies = () => {
  const { data, isError, isLoading } = useGetSuppliesQuery(null);
  const { isDark } = useAppSelector((state) => state.theme);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-5">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (isError) {
    return <p>Something is wrong !!!</p>;
  }

  return (
    <div className={`${isDark ? "bg-slate-500" : "bg-white"}`}>
      <div className="text-center w-11/12 mx-auto py-12">
        <h1 className="text-4xl font-bold pb-8">All Supplies</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 space-y-5">
          {data.map((info: TSupplyInfo) => (
            <CardSupplies key={info._id} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSupplies;
