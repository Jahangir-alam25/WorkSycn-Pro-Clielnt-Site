import { Helmet } from 'react-helmet-async';
import { FaUserCheck, FaUserClock, FaUserTimes, FaMoneyBillWave, FaUserPlus, FaChartPie } from 'react-icons/fa';

const HRDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Helmet>
        <title>Dashboard - WorkSync Pro</title>
      </Helmet>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">HR Dashboard</h1>
        <p className="text-gray-500">Manage employees, approvals, and payroll activities from one place.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaUserCheck className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500">Active Employees</p>
            <h3 className="text-xl font-bold text-gray-800">154</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaUserClock className="text-3xl text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Pending Verifications</p>
            <h3 className="text-xl font-bold text-gray-800">8</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaUserTimes className="text-3xl text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Recently Fired</p>
            <h3 className="text-xl font-bold text-gray-800">3</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaMoneyBillWave className="text-3xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Total Payroll (This Month)</p>
            <h3 className="text-xl font-bold text-gray-800">$85,700</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaUserPlus className="text-3xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">New Hires (30 days)</p>
            <h3 className="text-xl font-bold text-gray-800">12</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaChartPie className="text-3xl text-purple-500" />
          <div>
            <p className="text-sm text-gray-500">Payroll Status</p>
            <h3 className="text-xl font-bold text-green-600">On Track</h3>
          </div>
        </div>

      </div>

      {/* Employee Approvals Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pending Employee Verifications</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200 text-gray-600">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tanvir Hasan</td>
                <td>tanvir@example.com</td>
                <td>Employee</td>
                <td>01 July 2025</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td><button className="btn btn-sm btn-primary">Verify</button></td>
              </tr>
              <tr>
                <td>Sadia Rahman</td>
                <td>sadia@example.com</td>
                <td>Employee</td>
                <td>28 June 2025</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td><button className="btn btn-sm btn-primary">Verify</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default HRDashboard;