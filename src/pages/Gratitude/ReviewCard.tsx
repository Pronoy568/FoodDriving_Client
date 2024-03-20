interface ReviewInfo {
  review: string;
  user: { email: string };
}

const ReviewCard = ({ info }: { info: ReviewInfo }) => {
  return (
    <div className="card card-compact bg-base-100 hover:bg-slate-200 shadow-xl p-1">
      <div className="text-center">
        <p className="text-xl">
          {" "}
          <span className="font-bold text-blue-950">Review:</span> {info.review}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-bold text-blue-950">Email:</span>{" "}
          {info.user.email}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
