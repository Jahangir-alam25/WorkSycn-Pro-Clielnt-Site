
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield, FaTrashAlt, FaUsers } from 'react-icons/fa';
import { toast } from 'react-toastify';
 import Swal from 'sweetalert2';

const AllEmployees = () => {
  const axiosSecure = useAxiosSecure();
  const [viewMode, setViewMode] = useState('table');

  const { data: verifiedUsers = [], refetch } = useQuery({
    queryKey: ['verified-users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users?verified=true');
      return res.data;
    },
  });

  const handleMakeHR = async (id) => {
    try {
      await axiosSecure.patch(`/users/${id}/make-hr`);
      toast.success('User promoted to HR');
      refetch();
    } catch (err) {
      toast.error('Failed to promote', err.message);
    }
  };

  
const handleFire = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "Do you really want to fire this user?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, fire them!',
  });

  if (!result.isConfirmed) return;

  try {
    await axiosSecure.patch(`/users/${id}/fire`);
    Swal.fire('Fired!', 'The user has been fired.', 'success');
    refetch();
  } catch (err) {
    Swal.fire('Error', 'Firing failed. Please try again.', err.message);
  }
};


  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-primary font-bold">All Verified Employees</h2>
        <button
          onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
          className="btn btn-primary"
        >
          Toggle {viewMode === 'table' ? 'Card View' : 'Table View'}
        </button>
      </div>

      {viewMode === 'table' ? (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="table table-zebra w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Make HR</th>
                <th>Fire</th>
              </tr>
            </thead>
            <tbody>
              {verifiedUsers.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.designation}</td>
                  <td>
                    {user.role === 'employee' ? (
                      <button
                        onClick={() => handleMakeHR(user._id)}
                        className="btn btn-sm btn-primary"
                      >
                        <FaUserShield /> Make HR
                      </button>
                    ) : user.role}
                  </td>
                  <td>
                    {user.status === 'fired' ? (
                      <span className="text-red-500">Fired</span>
                    ) : (
                      <button
                        onClick={() => handleFire(user._id)}
                        className="btn btn-sm btn-error"
                      >
                        <FaTrashAlt /> Fire
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {verifiedUsers.map(user => (
            <div key={user._id} className="card bg-base-100 shadow p-4">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{user.name}</h3>
                  <p className="text-sm">{user.email}</p>
                  <p className="text-xs text-gray-500">{user.designation}</p>
                </div>
              </div>
              <div className="flex justify-between">
                {user.role === 'employee' ? (
                  <button
                    onClick={() => handleMakeHR(user._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Make HR
                  </button>
                ) : <span className="text-primary">HR</span>}

                {user.status === 'fired' ? (
                  <span className="text-red-500">Fired</span>
                ) : (
                  <button
                    onClick={() => handleFire(user._id)}
                    className="btn btn-sm btn-error"
                  >
                    Fire
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEmployees;

