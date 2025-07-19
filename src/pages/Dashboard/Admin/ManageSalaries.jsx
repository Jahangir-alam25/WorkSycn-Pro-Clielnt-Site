import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageSalaries = () => {
  const axiosSecure = useAxiosSecure();
  const [editSalaries, setEditSalaries] = useState({}); // Track updated salary per user

  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["manageSalaries"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleUpdateSalary = async (userId, currentSalary) => {
    const newSalary = parseFloat(editSalaries[userId]);
    console.log(newSalary);
    

    if (newSalary <= currentSalary || isNaN(newSalary)) {
      Swal.fire("Error", "Salary must be greater than current.", "error");
      return;
    }

    const confirm = await Swal.fire({
      title: `Increase salary to $${newSalary}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Update",
    });

    if (confirm.isConfirmed) {
      await axiosSecure.patch(`/users/${userId}/update-salary`, {
        salary: newSalary,
      });
      Swal.fire("Success", "Salary updated successfully", "success");
      refetch();
      setEditSalaries((prev) => ({ ...prev, [userId]: "" }));
    }
  };

  const handleInputChange = (userId, value) => {
    setEditSalaries((prev) => ({ ...prev, [userId]: value }));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* <h2 className="text-2xl font-bold mb-4">Manage Employee & HR Salaries</h2> */}
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Manage Employee & HR Salaries</h2>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="table table-zebra w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Current Salary</th>
                <th>New Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>${u.salary}</td>
                  <td>
                    <input
                      type="number"
                      value={editSalaries[u._id] || ""}
                      onChange={(e) => handleInputChange(u._id, e.target.value)}
                      className="input input-sm input-bordered w-24"
                      min={u.salary + 1}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleUpdateSalary(u._id, u.salary)}
                      disabled={
                        !editSalaries[u._id] ||
                        parseFloat(editSalaries[u._id]) <= u.salary
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500">
                    No verified employees or HRs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageSalaries;
