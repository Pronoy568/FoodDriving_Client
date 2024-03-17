import About from "./About";
import Banner from "./Banner";
import Benefit from "./Benefit";
import Donor from "./Donor";
import Gallery from "./Gallery";
import Nutrition from "./Nutrition";
import Supplies from "./Supplies";

const LandingPage = () => {
  return (
    <div>
      <Banner></Banner>
      <Supplies />
      <Donor></Donor>
      <Gallery></Gallery>
      <About></About>
      <Nutrition></Nutrition>
      <Benefit></Benefit>
    </div>
  );
};

export default LandingPage;
