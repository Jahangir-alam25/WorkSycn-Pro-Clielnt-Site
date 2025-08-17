import React from 'react';
import { NavLink, Outlet } from 'react-router';
// import ProFastLogo from '../pages/shared/ProFastLogo/ProFastLogo';
import {
  FaHome,
  FaMoneyCheckAlt,
  FaTasks,
  FaUserCheck,
  FaUsers,
  FaChartBar,
  FaUserShield,
  FaWallet,
  FaListAlt
} from 'react-icons/fa';
import useUserRole from '../hooks/useUserRole';
import WorkSyncProLogo from '../components/shared/WorkSyncProLogo';
// import useUserRole from '../hooks/useUserRole';

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Topbar for Mobile */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="mx-2 text-xl font-semibold">Dashboard</div>
        </div>

        {/* Outlet content */}
        <Outlet />
      </div>

      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu border-primary bg-white dark:bg-gray-800 dark:text-white border-r-4 rounded-md text-base-content min-h-full w-70 p-4">
        <WorkSyncProLogo></WorkSyncProLogo>

          {/* Common link */}
          <li>
            <NavLink to="/dashboard">
              <FaHome className="mr-2" />
              Dashboard Home
            </NavLink>
          </li>

          {/* Employee Routes */}
          {!roleLoading && role === 'employee' && (
            <>
              <li>
                <NavLink to="/dashboard/work-sheet">
                  <FaTasks className="mr-2" />
                  My Work Sheet
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaWallet className="mr-2" />
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          {/* HR Routes */}
          {!roleLoading && role === 'hr' && (
            <>
              <li>
                <NavLink to="/dashboard/employee-list">
                  <FaUsers className="mr-2" />
                  Employee List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/progress-review">
                  <FaChartBar className="mr-2" />
                  Progress Review
                </NavLink>
              </li>
            </>
          )}

          {/* Admin Routes */}
          {!roleLoading && role === 'admin' && (
            <>
              <li>
                <NavLink to="/dashboard/all-employee-list">
                  <FaUsers className="mr-2" />
                  All Employees
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payroll">
                  <FaMoneyCheckAlt className="mr-2" />
                  Payroll Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-salaries">
                  <FaListAlt className="mr-2" />
                  Manage Salaries
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/admin-panel">
                  <FaUserShield className="mr-2" />
                  Admin Panel
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
