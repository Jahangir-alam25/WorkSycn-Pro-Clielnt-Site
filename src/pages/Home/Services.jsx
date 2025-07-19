// const services = [
//   { title: "Task Management", desc: "Assign, track and update daily employee tasks easily." },
//   { title: "Payroll Processing", desc: "HR can pay verified employees securely each month." },
//   { title: "Performance Reports", desc: "Track productivity and monitor individual performance." },
// ];

// const Services = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 text-center">
//       <h2 className="text-3xl font-bold mb-8">Our Core Services</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {services.map((s, i) => (
//           <div key={i} className="bg-base-100 p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//             <p>{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


// import { FaUsers, FaMoneyCheckAlt, FaFileAlt, FaClipboardCheck, FaUserShield } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaUsers className="text-4xl text-primary" />,
//     title: "Employee Management",
//     description: "Seamlessly onboard, verify, and manage employee roles, contracts, and work history in one place.",
//   },
//   {
//     icon: <FaMoneyCheckAlt className="text-4xl text-primary" />,
//     title: "Payroll Processing",
//     description: "Automated and secure salary processing with Stripe integration, supporting monthly payouts and records.",
//   },
//   {
//     icon: <FaFileAlt className="text-4xl text-primary" />,
//     title: "Work Progress Monitoring",
//     description: "Track employee work submissions, monitor progress by month, and filter by individual performance.",
//   },
//   {
//     icon: <FaClipboardCheck className="text-4xl text-primary" />,
//     title: "Performance Insights",
//     description: "Visualize employee contributions and payroll trends with dynamic charts and dashboards.",
//   },
//   {
//     icon: <FaUserShield className="text-4xl text-primary" />,
//     title: "Role-Based Access",
//     description: "Ensure security and organization with Admin, HR, and Employee access controls.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="py-16 bg-base-200 text-base-content">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <WhyChooseUs />
//       <ResourceCategories></ResourceCategories>
//     </section>
//   );
// };

// export default Services;

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
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            What <span className="text-indigo-600">WorkSync Pro</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empower your workforce with seamless management, automated payroll, and real-time performance tracking.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 p-8 text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


// import {
//   FaUsers,
//   FaMoneyCheckAlt,
//   FaFileAlt,
//   FaClipboardCheck,
//   FaUserShield,
// } from "react-icons/fa";


// const services = [
//   {
//     icon: <FaUsers className="text-4xl text-primary" />,
//     title: "Employee Management",
//     description:
//       "Streamline employee onboarding, verification, and data tracking all from a unified dashboard.",
//   },
//   {
//     icon: <FaMoneyCheckAlt className="text-4xl text-primary" />,
//     title: "Payroll Processing",
//     description:
//       "Automate monthly payroll with secure Stripe payments, tracking, and history logging.",
//   },
//   {
//     icon: <FaFileAlt className="text-4xl text-primary" />,
//     title: "Work Progress Monitoring",
//     description:
//       "Evaluate task submissions, monitor work hours, and filter performance by employee or month.",
//   },
//   {
//     icon: <FaClipboardCheck className="text-4xl text-primary" />,
//     title: "Performance Insights",
//     description:
//       "Use visual charts and smart dashboards to analyze productivity, payouts, and team engagement.",
//   },
//   {
//     icon: <FaUserShield className="text-4xl text-primary" />,
//     title: "Role-Based Access Control",
//     description:
//       "Maintain security with separate access levels for Admins, HRs, and Employees.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="py-16 bg-base-200 text-base-content">
//       <div className="w-11/12 mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Discover how <span className="text-primary font-semibold">WorkSync Pro</span> simplifies employee operations
//             and boosts efficiency for your entire organization.
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-base-300"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-accent">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-20">
      
     
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from 'react';
// import { FaUserCheck, FaMoneyCheckAlt, FaClipboardList, FaChartLine } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaUserCheck className="text-4xl text-primary" />, 
//     title: 'Employee Management',
//     desc: 'Manage employee data, status, and roles with ease.'
//   },
//   {
//     icon: <FaMoneyCheckAlt className="text-4xl text-primary" />, 
//     title: 'Payroll System',
//     desc: 'Track salaries, initiate payments, and view history.'
//   },
//   {
//     icon: <FaClipboardList className="text-4xl text-primary" />, 
//     title: 'Task & Progress Tracking',
//     desc: 'Monitor employee workflow and task hours effectively.'
//   },
//   {
//     icon: <FaChartLine className="text-4xl text-primary" />, 
//     title: 'Analytics & Reports',
//     desc: 'Get insightful HR analytics and business intelligence.'
//   }
// ];

// const Services = () => {
//   return (
//     <div className="py-16 bg-base-200 text-center">
//       <h2 className="text-3xl font-bold mb-10">Our Services</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
//         {services.map((s, i) => (
//           <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
//             {s.icon}
//             <h3 className="text-xl font-semibold mt-4 mb-2">{s.title}</h3>
//             <p className="text-sm text-gray-600">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//       <WhyChooseUs></WhyChooseUs>
//     </div>
//   );
// };

// export default Services;

// import React from 'react';

// const WhyChooseUs = () => {
//   return (
//     <div className="py-16 bg-base-100 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-8">Why Choose WorkSync Pro?</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="text-left">
//           <h3 className="text-xl font-semibold mb-2">✅ Scalable Solution</h3>
//           <p className="text-gray-600">Built to grow with your team, from 5 to 500+ employees.</p>
//         </div>
//         <div className="text-left">
//           <h3 className="text-xl font-semibold mb-2">✅ Secure & Compliant</h3>
//           <p className="text-gray-600">Data privacy and compliance are top priority with integrated security practices.</p>
//         </div>
//         <div className="text-left">
//           <h3 className="text-xl font-semibold mb-2">✅ Fast Deployment</h3>
//           <p className="text-gray-600">Get your HR system running in minutes—not months.</p>
//         </div>
//         <div className="text-left">
//           <h3 className="text-xl font-semibold mb-2">✅ Intuitive Dashboard</h3>
//           <p className="text-gray-600">Clear admin panel and HR workflows to reduce confusion.</p>
//         </div>
//       </div>
      
//       <CTASection></CTASection>
//     </div>
//   );
// };

// export default WhyChooseUs;








