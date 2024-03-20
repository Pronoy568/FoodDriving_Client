import { useGetAllGratitudeQuery } from "../../redux/features/gratitudeApi/gratitudeApi";
import ReviewCard from "./ReviewCard";

const GetReview = () => {
  const { data, isError, isLoading } = useGetAllGratitudeQuery(null);

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
    <div className="text-center w-11/12 mx-auto py-5">
      <h1 className="text-3xl font-bold pb-2">All Review</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 space-y-5 space-x-5">
        {data.data.map((info) => (
          <ReviewCard key={info._id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default GetReview;
