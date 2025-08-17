
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ProgressReview = () => {
  const axiosSecure = useAxiosSecure();
  const [employeeName, setEmployeeName] = useState("");
  const [month, setMonth] = useState(new Date().getMonth() + 1); // current month

  // Get unique employee names for dropdown
  const { data: employeeList = [] } = useQuery({
    queryKey: ["all-employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/employees?role=employee");
      return res.data;
    },
  });

  // Load filtered work records
  const { data: workRecords = [], refetch } = useQuery({
    queryKey: ["progress", employeeName, month],
    queryFn: async () => {
      const res = await axiosSecure.get("/progress", {
        params: {
          employeeName: employeeName || undefined,
          month: month ? String(month).padStart(2, "0") : undefined,
        },
      });
      return res.data;
    },
  });
console.log(workRecords);

  useEffect(() => {
    refetch();
  }, [employeeName, month, refetch]);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
      <Helmet>
        <title>Progress Review - WorkSync Pro</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Employee Work Progress</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Employee Filter */}
        <select
          className="select dark:bg-gray-800 dark:text-white select-bordered w-full max-w-xs"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        >
          <option value="">All Employees</option>
          {employeeList.map((emp) => (
            <option key={emp._id} value={emp.name}>
              {emp.name}
            </option>
          ))}
        </select>

        {/* Month Filter */}
        <select
          className="select dark:bg-gray-800 dark:text-white select-bordered w-full max-w-xs"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">All Months</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>


    
      </div>

      {/* Table of Work Records */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Employee</th>
              <th>Email</th>
              <th>Work</th>
              <th>Designation</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            {workRecords.length > 0 ? (
              workRecords.map((record, index) => (
                <tr key={record._id}>
                  <td>{index + 1}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.taskType}</td>
                  <td>{record.designation}</td>
                  <td>{new Date(record.date).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No work records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressReview;
