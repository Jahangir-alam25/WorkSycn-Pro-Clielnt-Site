// import React from "react";

// const FAQs = [
//   {
//     question: "How does this posture corrector work?",
//     answer:
//       "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
//   },
//   {
//     question: "Is it suitable for all ages and body types?",
//     answer:
//       "Yes, posture correctors are designed to be adjustable and suitable for a wide range of body types and ages.",
//   },
//   {
//     question: "Does it really help with back pain and posture improvement?",
//     answer:
//       "Many users experience reduced back pain and better posture with consistent use, though results vary by individual.",
//   },
//   {
//     question: "Does it have smart features like vibration alerts?",
//     answer:
//       "Some models include smart features like vibration alerts to notify you when you slouch.",
//   },
//   {
//     question: "How will I be notified when the product is back in stock?",
//     answer:
//       "You can sign up for restock alerts on the product page to receive an email when it becomes available.",
//   },
// ];

// const FAQ = () => {
//   return (
//     <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           Frequently Asked Question (FAQ)
//         </h2>
//         <p className="text-center text-gray-500 mb-8">
//           Enhance posture, mobility, and well-being effortlessly with Posture Pro.
//           Achieve proper alignment, reduce pain, and strengthen your body with ease!
//         </p>

//         <div className="space-y-4">
//           {FAQs.map((faq, index) => (
//             <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-box" key={index}>
//               <input type="checkbox" />
//               <div className="collapse-title text-md font-semibold text-gray-800">
//                 {faq.question}
//               </div>
//               <div className="collapse-content text-gray-600">
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold py-2 px-6 rounded-full inline-flex items-center transition-all">
//             See More FAQ’s
//             <span className="ml-2">➜</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

// import React from "react";

// const FAQs = [
//   {
//     question: "How does this posture corrector work?",
//     answer:
//       "It provides ergonomic support to gently align your shoulders, spine, and back — promoting long-term posture improvement with consistent use.",
//   },
//   {
//     question: "Is it suitable for all ages and body types?",
//     answer:
//       "Absolutely! Our design is fully adjustable, making it comfortable and effective for users of various ages and body types.",
//   },
//   {
//     question: "Does it really help with back pain and posture improvement?",
//     answer:
//       "Yes. Thousands have experienced reduced pain and improved posture. However, results may vary depending on personal habits and usage consistency.",
//   },
//   {
//     question: "Does it have smart features like vibration alerts?",
//     answer:
//       "Certain premium models do come with vibration sensors that gently alert you whenever you begin to slouch.",
//   },
//   {
//     question: "How will I be notified when the product is back in stock?",
//     answer:
//       "You can subscribe for restock notifications on the product page and get an email alert when it's available.",
//   },
// ];

// const FAQ = () => {
//   return (
//     <section className="py-20 bg-base-100 px-4 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-primary mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-500 max-w-xl mx-auto">
//             Here are some of the most common questions our customers ask. We’re
//             here to help you get the most out of your Posture Pro experience.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {FAQs.map((faq, index) => (
//             <div
//               key={index}
//               className="collapse collapse-plus bg-white border border-gray-200 rounded-lg shadow-sm"
//             >
//               <input type="checkbox" />
//               <div className="collapse-title text-lg font-semibold text-gray-800">
//                 {faq.question}
//               </div>
//               <div className="collapse-content text-gray-600 leading-relaxed">
//                 <p>{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <button className="btn btn-primary rounded-full px-8 py-2 text-white shadow-md hover:shadow-lg transition">
//             See More FAQs →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React from "react";

const FAQs = [
  {
    question: "What is WorkSync Pro and who can use it?",
    answer:
      "WorkSync Pro is a modern employee management platform designed for companies to manage workflows, salaries, and HR operations. Admins, HRs, and Employees each have different access and responsibilities within the platform.",
  },
  {
    question: "How does payroll processing work?",
    answer:
      "Employees submit payroll requests at the end of each month. HR/Admin can then process the payment securely via Stripe. Once paid, the status updates to 'Paid' and is recorded in the system.",
  },
  {
    question: "Can Admins assign or revoke HR roles?",
    answer:
      "Yes. Admins can promote verified employees to HR or fire users, which restricts them from logging in or accessing the platform anymore — without deleting them from Firebase.",
  },
  {
    question: "How is employee work progress tracked?",
    answer:
      "Employees can post daily or monthly work logs. HRs can filter these submissions by employee name and month to evaluate performance and hours worked.",
  },
  {
    question: "Is salary adjustment possible?",
    answer:
      "Yes. Admins can increase (but not decrease) employee or HR salaries based on performance or company policy. Adjusted salary reflects in the next payroll cycle.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 w-11/12 mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Learn more about how WorkSync Pro streamlines employee management, HR tasks, and payroll operations.
          </p>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold text-gray-800">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn btn-primary rounded-full px-8 py-2 text-white shadow-md hover:shadow-lg transition">
            See More FAQs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

