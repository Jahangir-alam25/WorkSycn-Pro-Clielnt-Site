

import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";
import Loading from "../../../components/shared/Loading";
import { Helmet } from "react-helmet-async";

const EmployeeDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, error } = useQuery({
    queryKey: ["employee-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${id}/salary-history`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <p className="text-center mt-10 text-red-500 font-semibold">Error loading employee data.</p>;

  const { user, salaryHistory } = data;

  const chartData = salaryHistory.map(item => ({
    name: `${item.month}-${item.year}`,
    salary: item.salary,
  }));

  return (
    <div className="px-4 py-12 dark:bg-gray-900 dark:text-white bg-[#f9fafb] min-h-screen">
      <Helmet>
        <title>Employee Details - WorkSync Pro</title>
      </Helmet>
      {/* Employee Profile */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-6 p-6 mb-12">
        <img src={user.photo} alt={user.name} className="w-24 h-24 rounded-full object-cover border-2 border-primary" />
        <div>
          <h2 className="text-3xl font-bold text-primary mb-1">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">{user.designation || "No Designation Found"}</p>
          <p className="text-sm text-gray-400 ">{user.email}</p>
        </div>
      </div>

      {/* Salary Overview Chart */}
      <div className="bg-white dark:bg-gray-800 dark:text-white max-w-5xl mx-auto p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300 border-b pb-2">Salary Overview</h3>

        {chartData.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="min-w-[650px]">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="salary" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center py-10">No salary records found.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;

