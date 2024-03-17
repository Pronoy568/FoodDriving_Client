import { Link, useParams } from "react-router-dom";
import { useGetSingleSuppliesQuery } from "../../redux/features/supplies/suppliesApi";

const SingleSupply = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetSingleSuppliesQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-5">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (isError) {
    return <p>Something is wrong !!!</p>;
  }

  return (
    <div className="flex items-center justify-center pt-3 pb-16">
      <div className="w-2/4">
        <figure className="flex items-center justify-center py-5">
          <img
            className="rounded-3xl w-3/4"
            src={data.photo}
            alt={data.title}
          />
        </figure>
        <div className="text-center">
          <h2 className="text-3xl font-medium py-2 text-blue-900">
            {data.title}
          </h2>
          <p className="text-xl">
            <span className="font-bold">Category:</span> {data.category}
          </p>
          <p className="text-xl py-1">
            {" "}
            <span className="font-bold">Quantity:</span> {data.quantity}
          </p>
          <p className="text-xl pb-5">
            {" "}
            <span className="font-bold">Description:</span> {data.description}
          </p>
          <button className="btn btn-outline">
            <Link to="/supplies">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSupply;
