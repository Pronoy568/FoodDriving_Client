import DonorDisplay from "./DonorDisplay";
import { useGetTestimonialQuery } from "../../redux/features/testimonial/testimonialApi";
import { TDonarInfo } from "../../types/donarTypes";

const Donor = () => {
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

  return (
    <div className="text-center w-11/12 mx-auto py-12" id="chef">
      <h1 className="text-5xl font-bold pb-8">Top Donor</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 space-y-5">
        {data.data.map((chef: TDonarInfo) => (
          <DonorDisplay key={chef._id} chef={chef}></DonorDisplay>
        ))}
      </div>
    </div>
  );
};

export default Donor;
