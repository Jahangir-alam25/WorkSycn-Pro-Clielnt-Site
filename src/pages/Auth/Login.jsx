
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/shared/SocialLogin";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, logOut } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const axiosSecure = useAxios();
  const location = useLocation();
  const from = location.state?.from || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    setFirebaseError("");

    try {
      const result = await signIn(email, password);
      console.log("Login Result:", result);


      // ✅ After Firebase login, check user's status from backend:
      const { data: userInfo } = await axiosSecure.get(`/users/by-email/${email}`);
      // console.log("User Info:", userI nfo);

      if (userInfo?.isFired) {
        await logOut();
        toast.error("Access denied. You have been removed from the company.");
        setFirebaseError("You are no longer allowed to access this platform.");
        return;
      }

      toast.success("Welcome back!", { autoClose: 2000 });
      navigate(from);

    } catch (error) {
      console.error(error);
      setFirebaseError("Invalid email or password.");
      toast.error("Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Helmet>
        <title>Login - WorkSync Pro</title>
      </Helmet>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium dark:text-gray-400 text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="input input-bordered dark:bg-gray-900 dark:text-white w-full"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="input input-bordered dark:bg-gray-900 dark:text-white w-full pr-10"
            />
            <span
              className="absolute top-9 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {firebaseError && (
            <p className="text-red-500 text-center mb-2">{firebaseError}</p>
          )}

          <div className="flex justify-end mb-4">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-full text-white tracking-wide">
            Login
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register Now
            </Link>
          </p>
        </form>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;

