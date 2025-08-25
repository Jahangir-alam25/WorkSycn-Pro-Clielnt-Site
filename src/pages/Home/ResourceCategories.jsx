
import { FaBookOpen, FaUserTie, FaMoneyBillWave, FaChartPie } from "react-icons/fa";

const resourceItems = [
  {
    icon: <FaBookOpen className="text-4xl text-primary dark:text-white mb-4" />,
    title: "Employee Guides",
    description: "Comprehensive onboarding, workflow, and compliance documentation for employees.",
    linkText: "View Guides",
  },
  {
    icon: <FaUserTie className="text-4xl text-secondary mb-4" />,
    title: "HR Resources",
    description: "Policies, training materials, and operational documents for HR professionals.",
    linkText: "Explore Resources",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-accent mb-4" />,
    title: "Payroll FAQs",
    description: "Answers to common payroll queries to help you manage payments confidently.",
    linkText: "Learn More",
  },
  {
    icon: <FaChartPie className="text-4xl text-primary dark:text-white mb-4" />,
    title: "Productivity Tools",
    description: "Access integrated tools to monitor, evaluate, and enhance team productivity.",
    linkText: "Check Tools",
  },
];

const ResourceCategories = () => {
  return (
    <div className="bg-cyan-100 dark:bg-gray-900 dark:text-white">
      <section className="py-20 w-11/12 mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Explore <span className="text-primary dark:text-pink-500">Resources</span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Resources crafted to empower your team — from new joiners to HR managers. Access guides, insights, and productivity tools at your fingertips.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {resourceItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800  rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            {item.icon}
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
            <button className="text-primary dark:text-pink-500  font-semibold hover:underline">
              {item.linkText} →
            </button>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-16">
        <button className="btn btn-primary dark:bg-pink-500 hover:dark:bg-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-700">
          Access All Resources
        </button>
      </div>
    </section>
    </div>
  );
};

export default ResourceCategories;
