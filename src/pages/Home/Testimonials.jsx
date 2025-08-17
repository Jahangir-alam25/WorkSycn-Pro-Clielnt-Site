


import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sadia Rahman",
    role: "HR Executive, TechFlow Ltd.",
    feedback:
      "WorkSync Pro has streamlined our employee management system! Payroll and verification are now stress-free.",
    photo: "https://i.ibb.co/99x78KwH/view-3d-woman-wearing-hijab.jpg",
  },
  {
    name: "Tanvir Hasan",
    role: "Senior Developer, DevHouse",
    feedback:
      "This platform is so easy to use and manage. I can submit work logs and track salary status without hassle.",
    photo: "https://i.ibb.co/1G0RP2Ch/happy-male-with-satisfied-expression.jpg",
  },
  {
    name: "Maria Islam",
    role: "Admin, Softnix Solutions",
    feedback:
      "Managing HR operations has never been smoother. I highly recommend WorkSync Pro for growing teams!",
    photo: "https://i.ibb.co/nqrKDTLZ/medium-shot-muslim-woman-posing-with-flowers.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-100 dark:bg-gray-900 dark:text-white">
      <div className="w-11/12 mx-auto text-center">
        <div className="mb-12">
          <FaQuoteLeft className="text-4xl mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">What our customers are saying</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with WorkSync Pro. Simplify management and boost your team's productivity!
          </p>
        </div>

        <div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-6"
        >
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-sm mx-auto  ">
                <div className="text-gray-500 dark:text-gray-400 italic text-sm mb-4">
                  <FaQuoteLeft className="inline text-primary mr-2" />
                  {item.feedback}
                </div>
                <div className="flex items-center gap-4 border-t pt-4">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-base dark:text-white text-neutral">{item.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </section>
  );
};

export default Testimonials;






