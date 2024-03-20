import { Layout, Menu } from "antd";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleTheme } from "../../redux/features/theme/themeSlice";

const { Sider } = Layout;

type TSidebarItem = {
  key: string;
  label: ReactNode;
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector((state) => state.theme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
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
      key: "Create Testimonial",
      label: (
        <NavLink to="/dashboard/create-testimonial">Create Testimonial</NavLink>
      ),
    },
    {
      key: "Home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "Theme",
      label: (
        <button onClick={handleChangeTheme}>
          {isDark ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun-moon"
              >
                <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.9 4.9 1.4 1.4" />
                <path d="m17.7 17.7 1.4 1.4" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.3 17.7-1.4 1.4" />
                <path d="m19.1 4.9-1.4 1.4" />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon text-black"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </>
          )}
        </button>
      ),
    },
  ];
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        backgroundColor: isDark ? "#111827" : "#ffffff",
        color: isDark ? "black" : "white",
      }}
    >
      <div
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: isDark ? "white" : "black",
        }}
      >
        <h1>Food Driving</h1>
      </div>
      <Menu
        theme={isDark ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
