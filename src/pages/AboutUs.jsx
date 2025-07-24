import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/FooterHome.jsx";
import Navbar from "../components/Navbar";
const teamMembers = [
    {
      name: "Alankar Achadian",
      title: "Executive Officer",
      description:
        "A visionary leader who recognized the potential of a humble classroom idea, turning it into the core mission of Eunoia Innovations.",
      image: "images/AlankarAchadian.png",
      linkedin: "https://www.linkedin.com/in/alankars-ak/",
    },
    {
      name: "Anjali Verma",
      title: "Technology Officer",
      description:
        "An engineering maestro, Anjali’s expertise transformed our dream of the Aqua Skimmer into a functioning reality.",
      image: "images/AnjaliVerma.png",
      linkedin: "https://www.linkedin.com/in/anjali-verma5/",
    },
    {
      name: "E Deepak Cheran",
      title: "Naval Architect",
      description:
        "Merging artistry with engineering, Deepak brings to life the intricate designs and structures of our robots, ensuring they’re both functional and formidable in their tasks.",
      image: "images/EDeepakCheran.png",
      linkedin: "https://www.linkedin.com/in/deepakcheran-navalarchitect/",
    },
    {
      name: "Aashish Sharma",
      title: "Operating Officer",
      description:
        "Aashish’s operational insights and strategies have been the driving force behind our streamlined processes and successful product rollouts.",
      image: "images/AashishSharma.png",
      linkedin: "https://www.linkedin.com/in/aashishsharma-designengineer/",
    },
  ];
  
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 ">
        <Navbar />
      <div className="max-w-7xl  py-10 px-6  mb-10 mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mt-20 mb-10">
          About Us
        </h1>

        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Ethos</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Eunoia Innovations, our journey exemplifies the power of young determination.
            We’re not just engineers; we’re environmental advocates. Our shared vision is to
            make a discernible impact on our planet, ensuring the sanctity of our water bodies
            for generations to come. <br /><br />
            We’re on an exciting trajectory, and we’re only just getting started. As we sail ahead,
            we invite you to join us in making a lasting difference, one ripple at a time.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
                key={index}
                className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-3xl p-6 flex flex-col items-center text-center transition-transform hover:scale-101"
            >
                <img
                src={member.image}
                alt={member.name}
                className="w-35 h-35 mb-4 rounded-full object-cover border-2 border-indigo-200 shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-indigo-600 mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 text-xl"
                >
                <FaLinkedin className="text-3xl" />
                </a>
            </div>
            ))}

          </div>
        </section>
       
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
