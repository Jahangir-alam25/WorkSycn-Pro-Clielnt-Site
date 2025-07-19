import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Forbidden = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 py-12 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <FaLock className="text-6xl text-red-500" />
                </div>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                    403 - Forbidden
                </h1>
                <p className="text-gray-600 mb-6">
                    Oops! You don't have permission to view this page. If you think this is an error, please contact your administrator.
                </p>
                <Link to="/" className="inline-block">
                    <button className="btn btn-primary w-full">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Forbidden;
