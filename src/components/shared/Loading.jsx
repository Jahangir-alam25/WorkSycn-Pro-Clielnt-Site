// components/Loading.jsx
import { Helmet } from "react-helmet-async";
import { FaTruckLoading } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white justify-center min-h-screen  px-6 py-12 text-center">
            <Helmet>
                <title>Loading - WorkSync Pro</title>
            </Helmet>
            {/* Icon */}
            <div className="animate-bounce text-primary text-7xl mb-4">
                <FaTruckLoading />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                Loading... Please wait
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
                Our system is processing your request. Your data will be ready shortly.
            </p>

            {/* Spinner */}
            <span className="loading loading-spinner loading-lg text-primary mt-8"></span>
        </div>
    );
};

export default Loading;
