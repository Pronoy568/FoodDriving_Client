/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { usePostVolunteerMutation } from "../../redux/features/volunteer/volunteerApt";

const CreateVolunteer = () => {
  const [postVolunteer] = usePostVolunteerMutation();
  const user = useAppSelector(selectCurrentUser);

  const handleAddVolunteer = async (event: any) => {
    event.preventDefault();
    try {
      const form = event.target;

      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const location = form.location.value;

      const newVolunteer = {
        name,
        email,
        phone,
        location,
      };
      await postVolunteer(newVolunteer);

      Swal.fire({
        title: "Success!",
        text: "Added Successfully Done",
        icon: "success",
        confirmButtonText: "OK",
      });

      event.target.reset();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add volunteer. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="bg-[#fefefe] p-4">
      <h1 className="text-3xl font-extrabold">Volunteer Form</h1>
      <form onSubmit={handleAddVolunteer}>
        {/* Form Name and Email */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                value={user ?? ""}
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form phone and location */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input type="submit" className="btn btn-block" value="Submit" />
      </form>
    </div>
  );
};

export default CreateVolunteer;
