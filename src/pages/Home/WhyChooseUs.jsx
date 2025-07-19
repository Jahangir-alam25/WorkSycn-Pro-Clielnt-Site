// import { FaChartLine, FaShieldAlt, FaRocket, FaTachometerAlt } from "react-icons/fa";
// import whyImage from "../../assets/WhyChoose.png"; // Replace with your actual image path

// const WhyChooseUs = () => {
//   return (
//     <div className="py-16 bg-base-100 px-6 md:px-20">
//       <h2 className="text-3xl font-bold text-center mb-12 text-primary">
//         Why Choose <span className="text-secondary">WorkSync Pro?</span>
//       </h2>

//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* Image or Illustration */}
//         <div className="flex justify-center">
//           <img src={whyImage} alt="Why Choose Us" className="w-full max-w-xl rounded-lg shadow-2xl" />
//         </div>

//         {/* Features */}
//         <div className="space-y-6">
//           <div className="flex items-start gap-4">
//             <FaChartLine className="text-3xl text-accent mt-1" />
//             <div>
//               <h3 className="text-xl font-semibold">Scalable Solution</h3>
//               <p className="text-gray-600">Built to grow with your team, from 5 to 500+ employees.</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <FaShieldAlt className="text-3xl text-accent mt-1" />
//             <div>
//               <h3 className="text-xl font-semibold">Secure & Compliant</h3>
//               <p className="text-gray-600">Data privacy and compliance are top priority with integrated security practices.</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <FaRocket className="text-3xl text-accent mt-1" />
//             <div>
//               <h3 className="text-xl font-semibold">Fast Deployment</h3>
//               <p className="text-gray-600">Get your HR system running in minutes—not months.</p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <FaTachometerAlt className="text-3xl text-accent mt-1" />
//             <div>
//               <h3 className="text-xl font-semibold">Intuitive Dashboard</h3>
//               <p className="text-gray-600">Clear admin panel and HR workflows to reduce confusion.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import {
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaTachometerAlt,
} from "react-icons/fa";
import whyImage from "../../assets/WhyChoose.png"; // Replace with your image

const reasons = [
  {
    icon: <FaChartLine className="text-3xl text-primary" />,
    title: "Scalable Solution",
    description:
      "Whether you're a startup or an enterprise, our platform scales with your team size and needs.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Secure & Compliant",
    description:
      "We prioritize your data security and ensure compliance with industry standards and protocols.",
  },
  {
    icon: <FaRocket className="text-3xl text-primary" />,
    title: "Fast Deployment",
    description:
      "Skip the long setup times—deploy and onboard your HR operations within minutes.",
  },
  {
    icon: <FaTachometerAlt className="text-3xl text-primary" />,
    title: "Intuitive Dashboard",
    description:
      "Our clean, user-friendly dashboard enables efficient task tracking and payroll management.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-base-100 text-base-content">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary">WorkSync Pro?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
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
                  <p className="text-gray-600">{item.description}</p>
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
