import { FormEvent, useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  useGetSingleSuppliesQuery,
  useUpdateSuppliesMutation,
} from "../../redux/features/supplies/suppliesApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSupply = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetSingleSuppliesQuery(id);
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState({
    title: "",
    category: "",
    quantity: "",
  });
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [updateSupplies] = useUpdateSuppliesMutation();

  useEffect(() => {
    if (data) {
      setInitialData({
        title: data.title,
        category: data.category,
        quantity: data.quantity,
      });
      setTitle(data.title);
      setCategory(data.category);
      setQuantity(data.quantity);
    }
  }, [data]);

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

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      const suppliesDetails = {
        id: id,
        title: title,
        category: category,
        quantity: quantity,
      };

      await updateSupplies(suppliesDetails);

      Swal.fire({
        title: "Update!",
        text: "Update Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/dashboard/supplies");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something is wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h3 className="font-bold text-lg">Update Supply!</h3>
        <p className="py-4">You can update the {initialData.title} Supply.</p>
        <div className="justify-center mt-1">
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <label
                  className="font-bold text-blue-600 text-xl"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  className="input input-bordered input-primary w-full max-w-xs"
                  value={title}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label
                  htmlFor="category"
                  className="font-bold text-blue-600 text-xl"
                >
                  Category
                </label>
                <input
                  onChange={(e) => setCategory(e.target.value)}
                  id="category"
                  className="input input-bordered input-primary w-full max-w-xs"
                  value={category}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label
                  htmlFor="quantity"
                  className="font-bold text-blue-600 text-xl"
                >
                  Quantity
                </label>
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  id="quantity"
                  className="input input-bordered input-primary w-full max-w-xs"
                  value={quantity}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSupply;
