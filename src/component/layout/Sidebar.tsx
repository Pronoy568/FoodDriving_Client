import { Layout, Menu } from "antd";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

type TSidebarItem = {
  key: string;
  label: ReactNode;
};

const sidebarItems: TSidebarItem[] = [
  {
    key: "dashboard",
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
  },
  {
    key: "Supplies",
    label: <NavLink to="/dashboard/supplies">Supplies</NavLink>,
  },
  {
    key: "Create Supply",
    label: <NavLink to="/dashboard/create-supply">Create Supply</NavLink>,
  },
  {
    key: "Home",
    label: <NavLink to="/">Home</NavLink>,
  },
];

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Food Driving</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
