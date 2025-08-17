import { Link, NavLink, useNavigate } from "react-router";
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import WorkSyncProLogo from "./WorkSyncProLogo";
import DarkMoodToggler from "./DarkMoodToggler";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Logout failed", error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/"     
        className={({ isActive }) =>
            isActive
              ? "text-primary dark:text-white dark:border-white font-semibold border-b-2 border-primary"
              : "hover:text-primary dark:hover:bg-gray-200"
          }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" 
        className={({ isActive }) =>
            isActive
              ? "text-primary dark:text-white dark:border-white font-semibold border-b-2 border-primary"
              : "hover:text-primary dark:hover:bg-gray-200"
          }>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" 
        className={({ isActive }) =>
            isActive
              ? "text-primary dark:text-white dark:border-white font-semibold border-b-2 border-primary"
              : "hover:text-primary dark:hover:bg-gray-200"
          }>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about-us" 
        className={({ isActive }) =>
            isActive
              ? "text-primary dark:text-white dark:border-white font-semibold border-b-2 border-primary"
              : "hover:text-primary dark:hover:bg-gray-200"
          }>About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 dark:bg-gray-900 dark:border-b-2 dark:text-white shadow-md sticky top-0 z-50 ">
      <div className="navbar w-11/12 mx-auto flex justify-between items-center">
     

        <div className="navbar-start">
          <WorkSyncProLogo></WorkSyncProLogo>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "https://i.ibb.co/yQ5Zgbs/avatar.png"} alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-white rounded-box w-52"
              >
                <li className="px-3 py-2">
                  <p className="font-medium">{user.displayName || "User"}</p>
                  <small>{user.email}</small>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-600 flex items-center gap-2">
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-2">
              <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </div>
          )}
          <div className="ml-2">
            <DarkMoodToggler />
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box -ml-20 w-38">
            <div className="flex items-start justify-between mb-2">
              <div>
                {navItems}
              </div>
              <DarkMoodToggler />
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="avatar cursor-pointer">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL || "https://i.ibb.co/yQ5Zgbs/avatar.png"} alt="User" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-white rounded-box w-52"
                >
                  <li className="px-3 py-2">
                    <p className="font-medium">{user.displayName || "User"}</p>
                    <small>{user.email}</small>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-red-600 flex items-center gap-2">
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-x-2">
                <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



