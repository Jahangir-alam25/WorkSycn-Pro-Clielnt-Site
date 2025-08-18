
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const rowsPerPage = 5;

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/payment-history?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Sort payments by Year and Month (earliest first)
  const sortedPayments = [...payments].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.month - b.month;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedPayments.length / rowsPerPage);
  const paginatedData = sortedPayments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>Payment History - WorkSync Pro</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Payment History</h2>

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : payments.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">No payment history found.</div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white dark:bg-gray-800 dark:text-white rounded shadow-md">
            <table className="table w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th>#</th>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Amount</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                    <td>{item.monthName || item.month}</td>
                    <td>{item.year}</td>
                    <td>${item.salary}</td>
                    <td>{item.transactionId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`btn btn-sm mx-1 ${
                    currentPage === i + 1 ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentHistory;

