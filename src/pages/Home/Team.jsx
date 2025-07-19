// const Team = () => {
//   return (
//     <div className="bg-base-100 py-12 px-4 text-center">
//       <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
//       <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         <div>
//           <img src="https://i.ibb.co/TwKtR1X/profile1.jpg" className="w-24 h-24 mx-auto rounded-full mb-2" alt="Team member" />
//           <p className="font-semibold">Jahangir Alam</p>
//           <p className="text-sm text-gray-500">Frontend Developer</p>
//         </div>
//         <div>
//           <img src="https://i.ibb.co/0JqPyz4/profile2.jpg" className="w-24 h-24 mx-auto rounded-full mb-2" alt="Team member" />
//           <p className="font-semibold">Tanvir Rahman</p>
//           <p className="text-sm text-gray-500">Backend Engineer</p>
//         </div>
//         <div>
//           <img src="https://i.ibb.co/tKjjJz1/profile3.jpg" className="w-24 h-24 mx-auto rounded-full mb-2" alt="Team member" />
//           <p className="font-semibold">Raihan Kabir</p>
//           <p className="text-sm text-gray-500">Project Manager</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;

// const teamMembers = [
//   {
//     name: "Jahangir Alam",
//     role: "Founder & CEO",
//     photo: "https://i.ibb.co/4fM8qz1/ceo.jpg",
//   },
//   {
//     name: "Sadia Khatun",
//     role: "Chief HR Officer",
//     photo: "https://i.ibb.co/G9h6PRK/hr.jpg",
//   },
//   {
//     name: "Rakib Hasan",
//     role: "Head of Development",
//     photo: "https://i.ibb.co/7rL2XmY/dev.jpg",
//   },
// ];

// const Team = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-10">Meet Our Leadership</h2>
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           {teamMembers.map((member, i) => (
//             <div key={i} className="bg-base-100 shadow-lg p-6 rounded-lg">
//               <img
//                 src={member.photo}
//                 alt={member.name}
//                 className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
//               />
//               <h4 className="text-xl font-semibold">{member.name}</h4>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

// const teamMembers = [
//   {
//     name: "Jahangir Alam",
//     role: "Founder & CEO",
//     photo: "https://i.ibb.co/4fM8qz1/ceo.jpg",
//   },
//   {
//     name: "Sadia Khatun",
//     role: "Chief HR Officer",
//     photo: "https://i.ibb.co/G9h6PRK/hr.jpg",
//   },
//   {
//     name: "Rakib Hasan",
//     role: "Head of Development",
//     photo: "https://i.ibb.co/7rL2XmY/dev.jpg",
//   },
// ];

// const Team = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-base-200 to-white">
//       <div className="w-11/12 mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
//           <p className="text-gray-500 mt-2 text-lg">
//             The minds behind the success of WorkSync Pro
//           </p>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300"
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={member.photo}
//                   alt={member.name}
//                   className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow"
//                 />
//               </div>
//               <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
//               <p className="text-sm text-gray-500 mt-1">{member.role}</p>
//               <div className="mt-4 h-1 w-16 mx-auto bg-primary rounded-full"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

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
    <div className="bg-gray-100">
      <section className="py-20 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center text-primary mb-4">
        Meet Our Leadership
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        At WorkSync Pro, our leadership team is dedicated to driving innovation, fostering collaboration, and building the future of workforce management.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-base-100 rounded-2xl shadow-lg text-center p-6 transition-transform hover:-translate-y-3 hover:shadow-xl duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
            />
            <h4 className="text-xl font-semibold text-neutral mb-1">
              {member.name}
            </h4>
            <p className="text-sm text-gray-500">{member.role}</p>
             <div className="mt-4 h-1 w-16 mx-auto bg-primary rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Team;
