import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import WorkSheet from "../pages/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../pages/Dashboard/Employee/PaymentHistory";
import AllEmployees from "../pages/Dashboard/Admin/AllEmployees";
import PayrollRequests from "../pages/Dashboard/Admin/PayrollRequests";
import ManageSalaries from "../pages/Dashboard/Admin/ManageSalaries";
import AdminPanel from "../pages/Dashboard/Admin/AdminPanel";
import EmployeeList from "../pages/Dashboard/HR/EmployeeList";
import ProgressReview from "../pages/Dashboard/HR/ProgressReview";
import EmployeeDetails from "../pages/Dashboard/HR/EmployeeDetails";
import AdminRoute from "./AdminRoute";
import HRRoute from "./HRRoute";
import EmployeeRoute from "./EmployeeRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import DashboardHome from "../pages/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
              path: '/contact-us',
              element: <ContactUs />
            },
            {
              path: '/about-us',
              element: <AboutUs />
            }

        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
      {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: '/dashboard/work-sheet',
        element: <EmployeeRoute><WorkSheet /></EmployeeRoute>
      },
      {
        path: '/dashboard/payment-history',
        element: <EmployeeRoute><PaymentHistory /></EmployeeRoute>
      },
      {
        path: '/dashboard/all-employee-list',
        element: <AdminRoute><AllEmployees /></AdminRoute>
      },
      {
        path: '/dashboard/payroll',
        element: <AdminRoute><PayrollRequests /></AdminRoute>
      },
      {
        path: '/dashboard/manage-salaries',
        element: <AdminRoute><ManageSalaries /></AdminRoute>
      },
      {
        path: '/dashboard/admin-panel',
        element: <AdminRoute><AdminPanel /></AdminRoute>
      },
      {
        path: '/dashboard/employee-list',
        element: <HRRoute><EmployeeList /></HRRoute>
      },
      {
        path: '/dashboard/progress-review',
        element: <HRRoute><ProgressReview /></HRRoute>
      },
      {
        path: '/dashboard/employee-details/:id',
        element: <HRRoute><EmployeeDetails /></HRRoute>
      }
    ]
    }
])