import ReviewForms from "../../component/form/ReviewForms";
import { useAppSelector } from "../../redux/hooks";
import GetReview from "./GetReview";

const Gratitude = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <div
      className={`${
        isDark ? "bg-slate-600" : "bg-white"
      } grid md:grid-cols-2 grid-cols-1 space-y-5`}
    >
      <ReviewForms />
      <GetReview />
    </div>
  );
};

export default Gratitude;
