

const teamMembers = [
  {
    name: "Jahangir Alam",
    role: "Founder & CEO",
    photo: "https://i.ibb.co/HfxK8rtw/IMG-20250508-WA0005.jpg",
  },
  {
    name: "Sadia Khatun",
    role: "Chief HR Officer",
    photo: "https://i.ibb.co/DPLDrXs2/amood-oyindamola-r1e-Ws-Gi8-Aw0-unsplash.jpg",
  },
  {
    name: "Rakib Hasan",
    role: "Head of Development",
    photo: "https://i.ibb.co/mCjMTg4p/IMG-20250508-WA0003.jpg",
  },
];

const Team = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white">
      <section className="py-20 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center text-primary mb-4">
        Meet Our Leadership
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
        At WorkSync Pro, our leadership team is dedicated to driving innovation, fostering collaboration, and building the future of workforce management.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-base-100 dark:bg-gray-800 rounded-xl shadow-lg text-center p-6 transition-transform hover:-translate-y-3 hover:shadow-xl duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
            />
            <h4 className="text-xl font-semibold text-neutral dark:text-white mb-1">
              {member.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
             <div className="mt-4 h-1 w-16 mx-auto bg-primary rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Team;
