// src/components/Skills.js
import React from "react";
import "../Styles/Skills.css";

const skills = [
  { name: "Java", level: 85 },
  { name: "JDBC", level: 80 },
  { name: "Servlets & JSP", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Hibernate", level: 40 },
  { name: "Spring Boot", level: 50 },
  { name: "React JS", level: 60 },
  { name: "Git & GitHub", level: 80 },
  { name: "Oracle SQL", level: 65 },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">My Skills & Tools</h2>
      <div className="skills-bars">
        {skills.map((skill, idx) => (
          <div className="skill" key={idx}>
            <span className="skill-name">{skill.name}</span>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              >
                <span className="progress-text">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
