import { Helmet } from 'react-helmet-async';
import { FaTasks, FaClock, FaMoneyCheckAlt, FaChartLine } from 'react-icons/fa';

const EmployeeDashboard = () => {
  return (
    <div className="  min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-6">
      <Helmet>
        <title>Dashboard - WorkSync Pro</title>
      </Helmet>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">Welcome, Employee!</h1>
        <p className="text-gray-500 dark:text-gray-400 ">Here's your current work status and payroll overview.</p>
      </div>

      {/* Cards Summary */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaTasks className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tasks Completed</p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">37</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaClock className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Hours Worked</p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">128 hrs</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaMoneyCheckAlt className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Next Salary Date</p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">25 July 2025</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaChartLine className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
            <h3 className="text-xl font-bold text-green-500">Excellent</h3>
          </div>
        </div>
      </div>

      {/* Work Updates Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Recent Work Submissions</h2>
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded shadow-md">
          <table className="table  w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th>Date</th>
                <th>Task</th>
                <th>Status</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09 July 2025</td>
                <td>Landing Page Update</td>
                <td><span className="badge badge-success">Approved</span></td>
                <td>6 hrs</td>
              </tr>
              <tr>
                <td>08 July 2025</td>
                <td>Bug Fixes</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>4 hrs</td>
              </tr>
              <tr>
                <td>07 July 2025</td>
                <td>UI Design Review</td>
                <td><span className="badge badge-error">Rejected</span></td>
                <td>3 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default EmployeeDashboard;






