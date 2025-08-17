

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const WorkSheet = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editDate, setEditDate] = useState(new Date());
  const [editingEntry, setEditingEntry] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const {
    register: editRegister,
    handleSubmit: handleEditSubmit,
    reset: resetEditForm,
    setValue: setEditValue,
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: workEntries = [], refetch } = useQuery({
    queryKey: ["workSheet", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/worksheets?email=${user?.email}`);
      return res.data;
    },
  });

  // ADD NEW TASK
  const onSubmit = async (data) => {
    const taskData = {
      taskType: data.taskType,
      hours: parseFloat(data.hours),
      date: selectedDate.toLocaleDateString("en-CA"),
      email: user.email,
      name: user.displayName,
    };

    await axiosSecure.post("/worksheets", taskData);
    Swal.fire("Added!", "Task added successfully", "success");

    reset();
    setSelectedDate(new Date());
    refetch();
  };

  // DELETE TASK
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      await axiosSecure.delete(`/worksheets/${id}`);
      Swal.fire("Deleted!", "Task deleted.", "success");
      refetch();
    }
  };

  // OPEN EDIT MODAL
  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setEditValue("taskType", entry.taskType);
    setEditValue("hours", entry.hours);
    setEditDate(new Date(entry.date));
    document.getElementById("edit_modal").showModal();
  };

  const handleModalClose = () => {
    setEditingEntry(null);
    resetEditForm();
    setEditDate(new Date());
    document.getElementById("edit_modal").close();
  };

  // UPDATE TASK
  const onEditSubmit = async (data) => {
    const taskData = {
      taskType: data.taskType,
      hours: parseFloat(data.hours),
      date: editDate.toLocaleDateString("en-CA"),
      email: user.email,
      name: user.displayName,
    };
    await axiosSecure.put(`/worksheets/${editingEntry._id}`, taskData);
    Swal.fire("Updated!", "Task updated successfully", "success");
    handleModalClose();
    refetch();
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Work Sheet - WorkSync Pro</title>
      </Helmet>
      {/* <h2 className="text-2xl font-bold mb-6">My Work Sheet</h2> */}
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Work Sheet</h2>

      {/* ADD FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-800 shadow p-4 rounded-md mb-8"
      >
        <select {...register("taskType")} className="select select-bordered dark:bg-gray-900 dark:text-white" required>
          <option value="">Select Task</option>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
        </select>

        <input
          type="number"
          {...register("hours", { required: true, min: 0.5 })}
          placeholder="Hours"
          className="input dark:bg-gray-900 dark:text-white input-bordered"
        />

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="input dark:bg-gray-900 dark:text-white input-bordered"
        />

        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>

      {/* TASK TABLE */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 dark:text-white rounded shadow">
        <table className="table">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Hours</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workEntries.map((entry, index) => (
              <tr key={entry._id}>
                <td>{index + 1}</td>
                <td>{entry.taskType}</td>
                <td>{entry.hours}</td>
                <td>{entry.date}</td>
                <td className="flex gap-2">
                  <button onClick={() => handleEdit(entry)} className="btn btn-sm btn-info">
                    🖊
                  </button>
                  <button onClick={() => handleDelete(entry._id)} className="btn btn-sm btn-error">
                    ❌
                  </button>
                </td>
              </tr>
            ))}
            {workEntries.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500 dark:text-gray-400">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box dark:bg-gray-800 dark:text-white">
          <h3 className="font-bold text-lg mb-4">Edit Task</h3>
          <form onSubmit={handleEditSubmit(onEditSubmit)} className="space-y-4">
            <select {...editRegister("taskType")} className="select select-bordered dark:bg-gray-900 dark:text-white w-full">
              <option value="">Select Task</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper-work</option>
            </select>

            <input
              type="number"
              {...editRegister("hours", { required: true })}
              className="input input-bordered dark:bg-gray-900 dark:text-white w-full"
            />

            <DatePicker
              selected={editDate}
              onChange={(date) => setEditDate(date)}
              className="input dark:bg-gray-900 dark:text-white input-bordered w-full"
            />

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button type="button" onClick={handleModalClose} className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default WorkSheet;
