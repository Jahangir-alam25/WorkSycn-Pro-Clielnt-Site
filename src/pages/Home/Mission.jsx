

import { FaUsers, FaClock, FaShieldAlt, FaChartLine } from "react-icons/fa";
import missionImg from "../../assets/register.jpg";  // Update with your own image

const Mission = () => {
  return (
   <div className="bg-cyan-100 dark:bg-gray-900 dark:text-white ">
     <section className=" py-20 w-11/12 mx-auto ">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Our <span className="text-primary dark:text-pink-500">Mission</span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          At WorkSync Pro, our mission is simple yet powerful: to empower modern companies with effortless employee management, transparent payroll processing, and productivity-enhancing insights.
        </p>
      </div>

      {/* Illustration + Intro */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="flex-1">
          <img src={missionImg} alt="Our Mission" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-pink-500">Why We Exist</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We believe that managing a workforce shouldn't feel like a burden. That’s why WorkSync Pro brings scalable HR, payroll, and employee workflow management to your fingertips—helping companies like yours grow without barriers.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our tools ensure clarity, boost productivity, and build trust—allowing you to focus on what matters most: your people.
          </p>
        </div>
      </div>

      {/* Mission Pillars */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-3xl text-primary dark:text-white mb-4 mx-auto" />
          <h4 className="text-lg font-semibold text-center mb-2">People First</h4>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Empower every employee with tools that inspire success.
          </p>
        </div>
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaClock className="text-3xl text-accent mb-4 mx-auto" />
          <h4 className="text-lg font-semibold text-center mb-2">Save Time</h4>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Automate tedious tasks with smart payroll & work tracking.
          </p>
        </div>
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaShieldAlt className="text-3xl text-secondary mb-4 mx-auto" />
          <h4 className="text-lg font-semibold text-center mb-2">Data Security</h4>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Prioritize privacy and compliance at every step.
          </p>
        </div>
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaChartLine className="text-3xl text-primary dark:text-white mb-4 mx-auto" />
          <h4 className="text-lg font-semibold text-center mb-2">Growth Focus</h4>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Enable data-driven growth with performance insights.
          </p>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-primary text-white dark:bg-gray-800 dark:text-white rounded-xl p-10 text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
        <p className="max-w-3xl mx-auto">
          To become the most trusted workforce management platform for small to enterprise-level businesses worldwide — enabling organizations to manage, engage, and grow their teams effectively.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="btn btn-primary dark:bg-pink-500 hover:dark:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700">
          Join WorkSync Pro Today
        </button>
      </div>

    </section>
   </div>
  );
};

export default Mission;


