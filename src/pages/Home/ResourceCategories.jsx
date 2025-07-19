// import { FaUsersCog, FaRegCalendarCheck, FaDollarSign, FaFileAlt } from "react-icons/fa";

// const ResourceCategories = () => {
//   const categories = [
//     {
//       title: "HR Templates",
//       icon: <FaUsersCog className="text-4xl text-primary" />,
//       description: "Ready-to-use HR documents like offer letters, contracts, leave forms.",
//     },
//     {
//       title: "Work Log Sheets",
//       icon: <FaRegCalendarCheck className="text-4xl text-secondary" />,
//       description: "Download monthly/weekly work log templates to track employee activity.",
//     },
//     {
//       title: "Payroll Templates",
//       icon: <FaDollarSign className="text-4xl text-accent" />,
//       description: "Accurate payroll spreadsheets and payment record formats.",
//     },
//     {
//       title: "Company Policies",
//       icon: <FaFileAlt className="text-4xl text-info" />,
//       description: "View official policies like attendance, remote work, and conduct.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-base-200">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Resource Categories</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {categories.map((cat, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
//               <div className="mb-4 flex justify-center">{cat.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
//               <p className="text-sm text-gray-600">{cat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResourceCategories;
import { FaBookOpen, FaUserTie, FaMoneyBillWave, FaChartPie } from "react-icons/fa";

const resourceItems = [
  {
    icon: <FaBookOpen className="text-4xl text-primary mb-4" />,
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
    icon: <FaChartPie className="text-4xl text-primary mb-4" />,
    title: "Productivity Tools",
    description: "Access integrated tools to monitor, evaluate, and enhance team productivity.",
    linkText: "Check Tools",
  },
];

const ResourceCategories = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-20 w-11/12 mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Explore <span className="text-primary">Resources</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Resources crafted to empower your team — from new joiners to HR managers. Access guides, insights, and productivity tools at your fingertips.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {resourceItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            {item.icon}
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <button className="text-primary font-semibold hover:underline">
              {item.linkText} →
            </button>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-16">
        <button className="btn btn-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-700">
          Access All Resources
        </button>
      </div>
    </section>
    </div>
  );
};

export default ResourceCategories;
