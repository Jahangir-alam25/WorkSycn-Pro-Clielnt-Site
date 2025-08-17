
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import {
  FaUsers,
  FaUserTie,
  FaMoneyCheckAlt,
  FaUserSlash,
  FaEnvelope,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="flex items-center gap-4">
      <div className={`text-5xl text-${color}-500`}>
        <Icon />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{label}</h4>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);

const AdminPanel = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/role-count");
      return res.data;
    },
  });

  const { data: contactMessages = [], isLoading: messagesLoading } = useQuery({
    queryKey: ["contactMessages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/contact-messages");
      return res.data;
    },
  });

  return (
    <div className="p-6 md:p-10 bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
      <Helmet>
        <title>Admin Panel - WorkSync Pro</title>
      </Helmet>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome, {user?.displayName || "Admin"} 👋
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Here’s an overview of your organization.
        </p>
      </div>

      {isLoading ? (
        <p className="text-center">Loading stats...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={FaUsers}
            label="Total Employees"
            value={stats.totalEmployees || 0}
            color="blue"
          />
          <StatCard
            icon={FaUserTie}
            label="Total HRs"
            value={stats.totalHRs || 0}
            color="green"
          />
          <StatCard
            icon={FaMoneyCheckAlt}
            label="Pending Payrolls"
            value={stats.pendingPayrolls || 0}
            color="yellow"
          />
          <StatCard
            icon={FaUserSlash}
            label="Fired Users"
            value={stats.firedUsers || 0}
            color="red"
          />
        </div>
      )}

      {stats.breakdown?.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Role-wise User Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-left">
              <thead className="text-sm uppercase text-gray-500 border-b">
                <tr>
                  <th className="p-3">Role</th>
                  <th className="p-3">Count</th>
                </tr>
              </thead>
              <tbody>
                {stats.breakdown.map((item) => (
                  <tr key={item.role} className="hover:bg-base-200">
                    <td className="p-3 font-medium">{item.role}</td>
                    <td className="p-3">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Contact Messages Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <FaEnvelope className="text-xl text-primary" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Contact Messages
          </h2>
        </div>

        {messagesLoading ? (
          <p>Loading messages...</p>
        ) : contactMessages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full text-left">
              <thead className="text-sm uppercase text-gray-500 dark:text-gray-400 border-b">
                <tr>
                  <th className="p-3">Email</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {contactMessages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-base-200">
                    <td className="p-3">{msg.email}</td>
                    <td className="p-3">{msg.message}</td>
                    <td className="p-3">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};

export default AdminPanel;
