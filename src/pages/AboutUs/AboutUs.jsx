

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-primary">WorkSync Pro</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At <span className="text-primary font-semibold">WorkSync Pro</span>, we redefine workforce management.
            From employee tracking to payroll automation, we empower businesses to scale and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/zTF2Fw4W/Banner-Displaying-the-success-of-the-company-relevant-idea-you-can-come-up-with.jpg"
              alt="About WorkSync Pro"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Text Content */}
          <div className="space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold text-primary">
              Empowering Teams, Simplifying Operations
            </h3>
            <p className="leading-relaxed">
              Founded to simplify workforce management, <strong>WorkSync Pro</strong> offers an intuitive solution for employee monitoring, HR oversight, and seamless payroll execution. Every feature is crafted for operational efficiency and scalability.
            </p>
            <p className="leading-relaxed">
              Whether you're a startup or a large enterprise, our platform adapts to your business needs and grows with you.
            </p>
            <p className="leading-relaxed">
              Trusted by hundreds of businesses globally, WorkSync Pro helps companies focus on innovation—not admin tasks.
            </p>
            <button className="btn btn-primary mt-4 rounded-lg px-6 py-2 text-lg">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

