/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

const CardSupplies = ({ info }: any) => {
  return (
    <div className="card card-compact w-96 bg-base-100 hover:bg-slate-200 shadow-xl">
      <figure>
        <img src={info.photo} alt={info.title} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl">{info.title}</h2>
        <p className="text-xl">
          <span className="font-bold">Category:</span> {info.category}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-bold">Quantity:</span> {info.quantity}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-info">
            <Link to={`/supplies/${info._id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSupplies;
