import React from "react";
import "../Styles/Certificates.css";
import PythonCert from "../assets/python_certificate.jpg";
import CCert from "../assets/C_programming.jpg";
const certificates = [
  {
    title: "Responsive Web Design",
    institute: "freeCodeCamp",
    skills: "HTML5, CSS3, Flexbox, Grid, Responsive layouts",
    link: "https://www.freecodecamp.org/certification/meghana_kontham/responsive-web-design",
    type: "certificate"
  },
  {
    title: "C Programming",
    institute: "Great Learning",
    skills: "Basics of C, Pointers, Functions, Arrays, Problem-solving",
    link: CCert,
    type: "certificate"
  },
{
  title: "Python Programming",
  institute: "Skill Rack",
  skills: "Python basics, Data Structures, OOP, Libraries: Pandas, NumPy",
  link: PythonCert, 
  type: "certificate"
},

  {
    title: "Code Frenzy & Eye Bugs",
    institute: "Internal Hackathon",
    skills: "Teamwork, Problem Solving, Competitive coding",
    type: "achievement"
  },
  {
    title: "Problem Solving",
    institute: "LeetCode & GeeksforGeeks",
    skills: "Solved 250+ problems covering Arrays, Strings, DSA topics",
    type: "achievement"
  },
  {
    title: "SIH Participation",
    institute: "Smart India Hackathon",
    skills: "Selected for internal presentation, idea implementation, teamwork",
    type: "achievement"
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="section-title">Certifications & Achievements</h2>
      <div className="certifications-container">
        {certificates.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <h3>{cert.title}</h3>
            {cert.institute && <p><strong>Institute:</strong> {cert.institute}</p>}
            <p>{cert.skills}</p>
            {cert.link && cert.type === "certificate" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cert"
              >
                View Certificate
              </a>
            )}
            {!cert.link && cert.type === "achievement" && (
              <button className="btn-achievement">Achievement</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
