

import {
  FaUsers,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaClipboardCheck,
  FaUserShield,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUsers className="text-5xl text-indigo-600 mb-4" />,
    title: "Employee Management",
    description:
      "Streamline onboarding, verification, and employee data tracking in one centralized system.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-5xl text-indigo-600 mb-4" />,
    title: "Payroll Processing",
    description:
      "Automate monthly salaries with secure Stripe payments and historical tracking.",
  },
  {
    icon: <FaFileAlt className="text-5xl text-indigo-600 mb-4" />,
    title: "Work Progress Monitoring",
    description:
      "Track work hours and evaluate employee tasks for better performance management.",
  },
  {
    icon: <FaClipboardCheck className="text-5xl text-indigo-600 mb-4" />,
    title: "Performance Insights",
    description:
      "Visual dashboards and reports help analyze productivity and payouts at a glance.",
  },
  {
    icon: <FaUserShield className="text-5xl text-indigo-600 mb-4" />,
    title: "Role-Based Access Control",
    description:
      "Maintain data security with layered access for Admins, HRs, and Employees.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-white text-gray-800">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            What <span className="text-indigo-600">WorkSync Pro</span> Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empower your workforce with seamless management, automated payroll, and real-time performance tracking.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 p-8 text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


