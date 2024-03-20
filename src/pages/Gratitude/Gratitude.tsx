import ReviewForms from "../../component/form/ReviewForms";
import GetReview from "./GetReview";

const Gratitude = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 space-y-5">
      <ReviewForms />
      <GetReview />
    </div>
  );
};

export default Gratitude;
