

import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[90vh] flex items-center  text-white"
      style={{
        backgroundImage: "url('https://i.ibb.co/fdrGFdrq/work-Sync-Pro-Banner.png')",
      }}
    >
      <div className="absolute inset-0 bg-cyan-200 opacity-60"></div>
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
