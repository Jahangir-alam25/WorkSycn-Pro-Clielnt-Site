

import {
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaTachometerAlt,
} from "react-icons/fa";
import whyImage from "../../assets/WhyChoose.png"; // Replace with your image

const reasons = [
  {
    icon: <FaChartLine className="text-3xl text-primary dark:text-white" />,
    title: "Scalable Solution",
    description:
      "Whether you're a startup or an enterprise, our platform scales with your team size and needs.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-primary dark:text-white" />,
    title: "Secure & Compliant",
    description:
      "We prioritize your data security and ensure compliance with industry standards and protocols.",
  },
  {
    icon: <FaRocket className="text-3xl text-primary dark:text-white" />,
    title: "Fast Deployment",
    description:
      "Skip the long setup times—deploy and onboard your HR operations within minutes.",
  },
  {
    icon: <FaTachometerAlt className="text-3xl text-primary dark:text-white" />,
    title: "Intuitive Dashboard",
    description:
      "Our clean, user-friendly dashboard enables efficient task tracking and payroll management.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-cyan-100 dark:bg-gray-900 dark:text-white text-base-content">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary dark:text-pink-500">WorkSync Pro?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Designed for teams of all sizes, WorkSync Pro empowers your HR and operations with speed,
            clarity, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="w-full flex justify-center">
            <img
              src={whyImage}
              alt="Why Choose Us"
              className="rounded-2xl h-40 sm:h-96 shadow-2xl w-full max-w-xl"
            />
          </div>

          {/* Reason List */}
          <div className="space-y-8">
            {reasons.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
