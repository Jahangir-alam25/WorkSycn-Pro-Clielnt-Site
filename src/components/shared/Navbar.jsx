import { Link, NavLink, useNavigate } from "react-router";
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import WorkSyncProLogo from "./WorkSyncProLogo";

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
        <NavLink to="/" className="hover:text-primary">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="hover:text-primary">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="hover:text-primary">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className="hover:text-primary">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto ">
        {/* <div className="navbar-start">
            <img className="w-10 h-10" src="./logo.jpg" alt="WorkSync Pro Logo" />
          <Link to="/" className="text-xl font-bold text-primary">
            WorkSync <span className="text-accent">Pro</span>
          </Link>
        
        </div> */}

        <div className="navbar-start">
          <WorkSyncProLogo></WorkSyncProLogo>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "https://i.ibb.co/yQ5Zgbs/avatar.png"} alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
