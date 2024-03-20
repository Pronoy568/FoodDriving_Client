import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/hooks";
import { useCreateGratitudeMutation } from "../../redux/features/gratitudeApi/gratitudeApi";
import {
  selectCurrentUser,
  selectCurrentUserName,
} from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const ReviewForms = () => {
  const [review, setReview] = useState("");
  const user = useAppSelector(selectCurrentUser);
  const userName = useAppSelector(selectCurrentUserName);
  const [createGratitude] = useCreateGratitudeMutation();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      return Swal.fire({
        title: "Login!",
        text: "Please Login",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }

    const toastId = toast.loading("Processing your request...");
    try {
      e.preventDefault();
      const formatData = {
        review: review,
        user: {
          name: userName,
          email: user,
        },
        createAt: new Date(),
      };
      const res = await createGratitude(formatData).unwrap();

      toast.success(res.message || "Successfully!", {
        id: toastId,
      });

      Swal.fire({
        title: "Review!",
        text: "Review Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      toast.error("Failed. Please try again", {
        id: toastId,
      });
      Swal.fire({
        title: "Error!",
        text: "Something is wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex justify-end items-center my-6">
      <div>
        <h3 className="font-bold text-3xl">Review Form!</h3>
        <div className="justify-center mt-1">
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <input
                  onChange={(e) => setReview(e.target.value)}
                  id="review"
                  className="input input-bordered input-primary w-full max-w-xs"
                  placeholder="Enter your review"
                  required
                />
              </div>
            </div>
            <div className="flex justify-start">
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForms;
