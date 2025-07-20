import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const { data: employees = [], refetch } = useQuery({
    queryKey: ["hrEmployees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/hr/employee-list");
      return res.data;
    },
  });

  // Toggle verification
  const handleVerify = async (emp) => {

    const res = await axiosSecure.patch(`/hr/employee/${emp._id}/verify`);
    console.log(res.data);

    if (res.data.updated) {
      Swal.fire("Success", "Verification status updated.", "success");
      refetch();
    }
  };

  // Open modal to pay
  const handleOpenPayModal = (emp) => {
    setSelectedEmployee(emp);
    setMonth("");
    setYear("");
    document.getElementById("pay_modal").showModal();
  };

  // Pay salary
  const handlePaySalary = async () => {
    if (!month || !year) {
      return Swal.fire("Error", "Please select month and year", "error");
    }



    const res = await axiosSecure.post("/payroll", {
      employeeId: selectedEmployee._id,
      name: selectedEmployee.name,
      salary: selectedEmployee.salary,
      bankAccountNo: selectedEmployee.bank_account_no,
      email: selectedEmployee.email,
      month,
      year,
   
    });

    if (res.data.insertedId) {
      Swal.fire("Success", "Payment request sent", "success");
      refetch();
      document.getElementById("pay_modal").close();
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Employee List - WorkSync Pro</title>
      </Helmet>
      {/* <h2 className="text-2xl font-bold mb-4">Employee List</h2> */}
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Employee List</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Bank A/C</th>
              <th>Salary</th>
              <th>Verified</th>
              <th>Pay</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={emp._id}>
                <td>{idx + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.bank_account_no || "N/A"}</td>
                <td>${emp.salary}</td>
                <td>
                  <button
                    onClick={() => handleVerify(emp)}
                    className="btn btn-xs"
                  >
                    {emp.isVerified ? "✅" : "❌"}
                  </button>
                </td>
                <td>
                  <button
                    disabled={!emp.isVerified}
                    onClick={() => handleOpenPayModal(emp)}
                    className="btn btn-sm btn-primary"
                  >
                    Pay
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => navigate(`/dashboard/employee-details/${emp._id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pay Salary Modal */}
      <dialog id="pay_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">
            Pay {selectedEmployee?.name}'s Salary
          </h3>
          <div className="mb-4">
            <label className="block mb-1">Salary</label>
            <input
              type="number"
              className="input input-bordered w-full"
              value={selectedEmployee?.salary}
              readOnly
            />
          </div>
          <div className="flex gap-4">
            <select
              className="select select-bordered w-full"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option disabled value="">
                Select Month
              </option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Year"
              className="input input-bordered w-full"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button className="btn btn-outline">Cancel</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePaySalary}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EmployeeList;
