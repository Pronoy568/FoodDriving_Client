import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProtectedRoute from "../../routes/ProtectedRoute";
import { useAppSelector } from "../../redux/hooks";
const { Content } = Layout;

const DashboardLayout = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <>
      <ProtectedRoute>
        <Layout style={{ height: "100%" }}>
          <Sidebar />
          <Layout>
            <Content>
              <div
                className={`${
                  isDark ? "bg-slate-500 p-6 h-full" : "bg-white p-6 h-full"
                }`}
              >
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </ProtectedRoute>
    </>
  );
};

export default DashboardLayout;
