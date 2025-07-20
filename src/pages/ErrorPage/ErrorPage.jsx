import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 text-center">
<Helmet>
    <title>ErrorPage - workSync pro</title>
</Helmet>

      <FaExclamationTriangle className="text-6xl text-error mb-6 animate-pulse" />

      <h1 className="text-5xl font-bold text-error mb-4">
        Oops! Something went wrong.
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        The page you're looking for doesn't exist, or an unexpected error has occurred.
        Please try again later or return to the homepage.
      </p>

      <Link to="/" className="btn btn-primary text-white px-8">
        Back to Home
      </Link>

      <p className="text-sm text-gray-400 mt-10">
        If the problem persists, contact support at <span className="text-primary font-medium">support@worksyncpro.com</span>
      </p>
    </div>
  );
};

export default ErrorPage;
