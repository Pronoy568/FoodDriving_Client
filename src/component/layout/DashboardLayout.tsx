import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProtectedRoute from "../../routes/ProtectedRoute";
const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <>
      <ProtectedRoute>
        <Layout style={{ height: "100%" }}>
          <Sidebar />
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
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
