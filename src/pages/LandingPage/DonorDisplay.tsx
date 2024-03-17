const DonorDisplay = (props: {
  chef: {
    chefName: string;
    chefImage: string;
    experience: string;
    recipeNumber: string;
    likeNumber: string;
    bio: string;
  };
}) => {
  const { chefName, chefImage, experience, recipeNumber, likeNumber, bio } =
    props.chef;

  return (
    <div>
      <div className="card w-96 bg-base-100 hover:bg-slate-200 shadow-xl pt-3">
        <div className="flex items-center justify-center">
          <figure>
            <img className="rounded-lg" src={chefImage} alt={chefName} />
          </figure>
          <div className="px-4 text-justify">
            <h1 className="card-title text-xl font-bold">{chefName}</h1>
            <h1>
              <span className="font-semibold">Experience: </span>
              {experience}
            </h1>
            <h1>
              <span className="font-semibold">Total Recipe:</span>{" "}
              {recipeNumber}
            </h1>
            <h1>
              <span className="font-semibold">Like:</span> {likeNumber}
            </h1>
          </div>
        </div>
        <div className="p-3 text-justify">
          <p>{bio.slice(0, 130)}...</p>
        </div>
      </div>
    </div>
  );
};

export default DonorDisplay;
