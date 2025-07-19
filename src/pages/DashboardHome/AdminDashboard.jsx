import { FaUsers,  FaFileAlt, FaUserShield, FaMoneyCheckAlt } from "react-icons/fa";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const roleData = [
  { name: 'Admin', value: 3 },
  { name: 'HR', value: 7 },
  { name: 'Employee', value: 140 },
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

const AdminDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Admin Dashboard</h1>
        <p className="text-gray-500">Control platform access, monitor company status, and oversee financial records.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaUsers className="text-3xl text-primary" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h3 className="text-xl font-bold text-gray-800">150</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaMoneyCheckAlt className="text-3xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Total Payroll Paid</p>
            <h3 className="text-xl font-bold text-gray-800">$1,250,000</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaFileAlt className="text-3xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Active Contracts</p>
            <h3 className="text-xl font-bold text-gray-800">120</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-xl transition">
          <FaUserShield className="text-3xl text-purple-500" />
          <div>
            <p className="text-sm text-gray-500">Role Management</p>
            <h3 className="text-xl font-bold text-gray-800">Enabled</h3>
          </div>
        </div>

      </div>

      {/* Employee Role Distribution */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Employee Role Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={roleData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={40}
              paddingAngle={5}
              label
            >
              {roleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AdminDashboard;