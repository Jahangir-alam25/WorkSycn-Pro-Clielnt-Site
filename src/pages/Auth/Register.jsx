
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import SocialLogin from '../../components/shared/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const axiosInstance = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result.user);
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.role,
          designation: data.designation,
          bank_account_no: data.bank_account_no,
          salary: data.salary,
          photo: profilePic,
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
          isVerified: false,
          isFired: false,
        };

        await axiosInstance.post('/users', userInfo);

        const userProfile = {
          displayName: data.name,
          photoURL: profilePic
        };
        updateUserProfile(userProfile)
          .then(() => navigate(from))
          .catch(error => console.log(error));

      })
      .catch(error => console.error(error));
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append('image', image);
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
    const res = await axios.post(uploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <div className=" ">
      <div className="card-body bg-white rounded">
        <h1 className="text-4xl font-bold mb-6 text-center">Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <label className="label">Your Name</label>
              <input type="text"
                {...register('name', { required: "Name is required" })}
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            {/* Profile Picture */}
            <div>
              <label className="label">Profile Picture</label>
              <input type="file"
                onChange={handleImageUpload}
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input type="email"
                {...register('email', { required: "Email is required" })}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register('password', {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters required" },
                  validate: {
                    hasUpperCase: value => /[A-Z]/.test(value) || "Must include an uppercase letter",
                    hasSpecialChar: value => /[!@#$%^&*(),.?/":{}|<>]/.test(value) || "Must include a special character"
                  }
                })}
                className="input input-bordered w-full pr-10"
                placeholder="Password"
              />

              {/* Toggle Icon */}
              <span
                className="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            {/* Role */}
            <div>
              <label className="label">Select Role</label>
              <select
                {...register("role", { required: "Role is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select Role</option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
              </select>
              {errors.role && <p className="text-red-500">{errors.role.message}</p>}
            </div>

            {/* Designation */}
            <div>
              <label className="label">Designation</label>
              <input type="text"
                {...register("designation", { required: "Designation is required" })}
                className="input input-bordered w-full"
              />
              {errors.designation && <p className="text-red-500">{errors.designation.message}</p>}
            </div>

            {/* Bank Account */}
            <div>
              <label className="label">Bank Account No</label>
              <input type="text"
                {...register("bank_account_no", { required: "Bank account no is required" })}
                className="input input-bordered w-full"
              />
              {errors.bank_account_no && <p className="text-red-500">{errors.bank_account_no.message}</p>}
            </div>

            {/* Salary */}
            <div>
              <label className="label">Salary</label>
              <input type="number"
                {...register("salary", { required: "Salary is required" })}
                className="input input-bordered w-full"
              />
              {errors.salary && <p className="text-red-500">{errors.salary.message}</p>}
            </div>

          </div>

          <button className="btn btn-primary w-full mt-6">Register</button>

          <p className="mt-4 text-center">
            <small>Already have an account? <Link className="link link-hover text-blue-600" to="/login">Login</Link></small>
          </p>
        </form>

        
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
