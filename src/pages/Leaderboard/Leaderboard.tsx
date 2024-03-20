import { useGetTestimonialQuery } from "../../redux/features/testimonial/testimonialApi";
import ShowLeaderboard from "./ShowLeaderboard";

const Leaderboard = () => {
  const { data, isError, isLoading } = useGetTestimonialQuery(null);

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

  const sortedData = [...data.data].sort((a, b) => b.quantity - a.quantity);

  return (
    <div className="text-center w-11/12 mx-auto py-5">
      <h1 className="text-3xl font-bold pb-2">Leaderboard</h1>
      <div className="grid grid-cols-1 space-y-5 py-10">
        <div className="flex justify-center items-center">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((info) => (
                  <ShowLeaderboard key={info._id} info={info} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
