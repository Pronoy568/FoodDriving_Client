import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { useAppSelector } from "../../redux/hooks";

const MainLayout = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <div className={`${isDark ? "bg-slate-600" : "bg-white"} `}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
