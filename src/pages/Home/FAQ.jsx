

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
   <div className="dark:bg-gray-900 dark:text-white">
     <section className="py-20 w-11/12 mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Learn more about how WorkSync Pro streamlines employee management, HR tasks, and payroll operations.
          </p>
        </div>

        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-white dark:bg-gray-800 border border-gray-200 rounded-lg shadow-sm"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold text-gray-800 dark:text-gray-200">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600 dark:text-gray-400 leading-relaxed">
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
   </div>
  );
};

export default FAQ;

