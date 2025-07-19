// const Banner = () => {
//   return (
//     <div className="hero min-h-[80vh] bg-base-200">
//       {/* <div className="hero-content flex-col lg:flex-row-reverse">
//         <img src="https://i.ibb.co/5R7RZJh/team-work.png" className="max-w-sm rounded-lg shadow-2xl" alt="Team" />
//         <div>
//           <h1 className="text-5xl font-bold">Empower Your Team with <span className="text-primary">WorkSync Pro</span></h1>
//           <p className="py-6">
//             Track tasks, manage payroll, and enhance team productivity — all in one platform designed for modern companies.
//           </p>
//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div> */}
//       <img className="w-full h-[80vh] " src="https://i.ibb.co/zTF2Fw4W/Banner-Displaying-the-success-of-the-company-relevant-idea-you-can-come-up-with.jpg" alt="" />
//     </div>
//   );
// };

// export default Banner;

// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center text-white" style={{ backgroundImage: "url('https://i.ibb.co/fdrGFdrq/work-Sync-Pro-Banner.png')" }}>
//       {/* <div className=" bg-opacity-60 p-10 rounded-xl text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Workforce Excellence</h1>
//         <p className="text-lg md:text-xl mb-6">WorkSync Pro helps you streamline HR, payroll, and employee management effortlessly.</p>
//         <button className="btn btn-primary">Get Started</button>
//       </div> */}
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <img src="https://i.ibb.co/5R7RZJh/team-work.png" className="flex-1 max-w-md py-12 rounded-lg shadow-2xl" alt="Team" />
//         <div className='flex-1 text-center lg:text-left '>
//           <h1 className="text-2xl font-bold">Empower Your Team with <span className="text-primary">WorkSync Pro</span></h1>
//           <p className="py-6">
//             Track tasks, manage payroll, and enhance team productivity — all in one platform designed for modern companies.
//           </p>
//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// // import "react-simple-typewriter/dist/index.css";

// const Banner = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center text-white"
//       style={{
//         backgroundImage:
//           "url('https://i.ibb.co/fdrGFdrq/work-Sync-Pro-Banner.png')",
//       }}
//     >
//       <div className="hero-content flex-col lg:flex-row-reverse  w-11/12 mx-auto">
//         <img
//           src="https://i.ibb.co/5R7RZJh/team-work.png"
//           className="flex-1 max-w-md py-12 rounded-lg shadow-2xl"
//           alt="Team"
//         />

//         <div className="flex-1 text-center lg:text-left">
//           <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
//             <Typewriter
//               words={[
//                 "Empower Your Team with",
//                 "WorkSync Pro",
//                 "Modern Workforce Solutions",
//               ]}
//               loop={0}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h1>

//           <p className="py-4 text-lg md:text-xl max-w-xl">
//             Track tasks, manage payroll, and enhance team productivity — all in one
//             platform designed for modern companies.
//           </p>
//           <button className="btn btn-primary mt-4">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[90vh] flex items-center  text-white"
      style={{
        backgroundImage: "url('https://i.ibb.co/fdrGFdrq/work-Sync-Pro-Banner.png')",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="relative z-10 w-11/12 mx-auto  flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
        <div className=" text-center lg:text-left">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight">
            <span className="text-primary">WorkSync Pro</span> is
            <br />
            <span className="text-accent">
              <Typewriter
                words={[
                  'Trusted by 100+ Companies',
                  'Managing 5K+ Employees',
                  'Streamlining Payroll',
                  'Boosting Team Productivity',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Empowering businesses with smarter employee management solutions.
            Our clients love the ease, speed, and control we bring to HR and Payroll.
          </p>
          <button className="btn btn-primary">Get Started Today</button>
        </div>

        <div className=" hidden  lg:block">
          <img
            src="https://i.ibb.co/zTF2Fw4W/Banner-Displaying-the-success-of-the-company-relevant-idea-you-can-come-up-with.jpg"
            alt="Team"
            className="w-full max-w-6xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;
