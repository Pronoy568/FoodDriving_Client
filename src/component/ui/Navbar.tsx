import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toggleTheme } from "../../redux/features/theme/themeSlice";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector((state) => state.theme);
  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div
        className={`${
          isDark ? "bg-slate-900 text-white" : "bg-base-100"
        } navbar lg:flex lg:justify-center lg:items-center`}
      >
        {/* Mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  <NavLink to="/">Home</NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink to="/supplies">All Supplies</NavLink>
                </a>
              </li>
              {user ? (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>
                      <NavLink to="/">Logout</NavLink>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
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
                      className="lucide lucide-sun-moon text-white"
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
                      className="lucide lucide-moon"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </>
                )}
              </button>
            </ul>
          </div>
          <img src={logo} alt="logo" />
        </div>
        {/* Big Screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/supplies">All Supplies</NavLink>
            </li>
            <li>
              <NavLink to="/community">Gratitude</NavLink>
            </li>
            {user ? (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    <NavLink to="/">Logout</NavLink>
                  </button>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
            <li>
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
                      className="lucide lucide-sun-moon text-white"
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
                      className="lucide lucide-moon "
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
