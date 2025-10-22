import React from "react";
import "../Styles/Projects.css";

const projects = [
{
  title: "Expense Tracker",
  description: "A web app to track daily expenses with categories, totals, and simple analytics. Users can easily add and delete expenses.",
  github: "https://github.com/Meghanaa47/ExpenseTracker",
  live: "https://Meghanaa47.github.io/ExpenseTracker/",
  technologies: "React JS, HTML, CSS",
  type: "frontend",
},

  {
    title: "Career Guidance Portal",
    description: "A guidance website providing students with quizzes to identify their top career roles, plus roadmaps and resources.",
    technologies: "Java, JSP, Servlets, JDBC, HTML, CSS",
    github: "https://github.com/Meghanaa47/Major_Projects",
    type: "fullstack",
  },
  {
    title: "Simple Calculator",
    description: "Web-based calculator performing basic arithmetic operations with clear/delete features.",
    github: "https://github.com/Meghanaa47/Calculator",
    live: "https://calculator-web47.netlify.app/",
    technologies: "HTML, CSS, JavaScript",
    type: "frontend",
  },

];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
            </div>
            <div className="project-overlay">
              {project.type === "fullstack" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
              ) : (
                <>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
