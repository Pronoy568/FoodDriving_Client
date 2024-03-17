/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import { usePostSuppliesMutation } from "../../redux/features/supplies/suppliesApi";

const CreateSupply = () => {
  const [postSupplies] = usePostSuppliesMutation();

  const handleAddSupply = async (event: any) => {
    event.preventDefault();
    try {
      const form = event.target;

      const title = form.title.value;
      const category = form.category.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const photo = form.photo.value;

      const newSupply = {
        title,
        category,
        quantity,
        description,
        photo,
      };
      await postSupplies(newSupply);

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
        text: "Failed to add supply. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="bg-[#f1f9f0] p-4">
      <h1 className="text-3xl font-extrabold">Add Supply</h1>
      <form onSubmit={handleAddSupply}>
        {/* Form Title and category */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supply Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supply title"
                name="title"
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
        {/* Form Quantity and description */}
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
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Description"
                name="description"
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
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Add Supply" />
      </form>
    </div>
  );
};

export default CreateSupply;
