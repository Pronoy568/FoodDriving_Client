import { useGetVolunteerQuery } from "../../redux/features/volunteer/volunteerApt";
import { useAppSelector } from "../../redux/hooks";
import { TVolunteerInfo } from "../../types/volunteerTypes";
import ShowVolunteer from "./ShowVolunteer";

const AboutUs = () => {
  const { data, isError, isLoading } = useGetVolunteerQuery(null);
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
    <div
      className={`${
        isDark ? "bg-slate-500 text-white" : "bg-white"
      } text-center pt-5`}
    >
      <h1 className="text-3xl font-bold pb-2">Our Voluntees</h1>
      <div className="grid grid-cols-1 space-y-5 py-10">
        <div className="flex justify-center items-center">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((info: TVolunteerInfo) => (
                  <ShowVolunteer key={info._id} info={info} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
