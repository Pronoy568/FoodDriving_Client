const DonorDisplay = (props: {
  chef: {
    name: string;
    email: string;
    category: string;
    quantity: string;
    photo: string;
  };
}) => {
  const { name, email, category, quantity, photo } = props.chef;

  return (
    <div className="card card-compact w-96 bg-base-100 hover:bg-slate-200 shadow-xl">
      <figure className="flex items-center justify-center">
        <img className="w-fit rounded" src={photo} alt={name} />
      </figure>
      <div className="card-body flex items-center justify-center">
        <div className=" text-justify">
          <h1 className="card-title text-2xl font-bold">{name}</h1>
          <h1 className="card-title text-2xl font-bold">{email}</h1>
          <h1 className="text-xl">
            <span className="font-bold">Category:</span> {category}
          </h1>
          <h1 className="text-xl">
            <span className="font-bold">Quantity:</span> {quantity}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DonorDisplay;
