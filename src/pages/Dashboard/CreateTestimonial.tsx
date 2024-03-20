/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import { usePostTestimonialMutation } from "../../redux/features/testimonial/testimonialApi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const CreateTestimonial = () => {
  const [postTestimonial] = usePostTestimonialMutation();
  const user = useAppSelector(selectCurrentUser);

  const handleAddTestimonial = async (event: any) => {
    event.preventDefault();
    try {
      const form = event.target;

      const name = form.name.value;
      const email = form.email.value;
      const category = form.category.value;
      const quantity = form.quantity.value;
      const photo = form.photo.value;

      const newTestimonial = {
        name,
        email,
        category,
        quantity,
        photo,
      };
      await postTestimonial(newTestimonial);

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
        text: "Failed to add testimonial. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="bg-[#fefefe] p-4">
      <h1 className="text-3xl font-extrabold">Add Testimonial</h1>
      <form onSubmit={handleAddTestimonial}>
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
        {/* Form Quantity and Category */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form Photo URL */}
        <div className="mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Your Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block"
          value="Add Testimonial"
        />
      </form>
    </div>
  );
};

export default CreateTestimonial;
