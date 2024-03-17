import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="navbar bg-base-100 lg:flex lg:justify-center lg:items-center">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
