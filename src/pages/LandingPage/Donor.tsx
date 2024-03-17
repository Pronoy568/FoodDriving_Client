import { useEffect } from "react";
import { useState } from "react";
import DonorDisplay from "./DonorDisplay";
import useScrollGrow from "../../component/hook/scrollHook";
import { motion } from "framer-motion";

const Donor = () => {
  const [chefData, setChefData] = useState([]);
  const { style, componentRef } = useScrollGrow();

  useEffect(() => {
    fetch(`https://indian-best-chef-server.vercel.app/chefRecipe`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="text-center w-11/12 mx-auto  py-12"
      id="chef"
    >
      <h1 className="text-5xl font-bold pb-8">Top Donor</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 space-y-5">
        {chefData.map((chef, index) => (
          <DonorDisplay key={index} chef={chef}></DonorDisplay>
        ))}
      </div>
    </motion.div>
  );
};

export default Donor;
