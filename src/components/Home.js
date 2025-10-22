import React from "react";
import "../Styles/Home.css";
import Profile from "../assets/Profile.png";


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <h1>Devi Kontham</h1>
        <p>
  Aspiring <b>Software Development Engineer</b> skilled in <b>Java, Spring Boot</b>, <b>React JS</b>, and modern web technologies. 
  Experienced in <b>full-stack development</b>, building <b>scalable and efficient applications</b>. 
  Strong understanding of <b>Data Structures & Algorithms (DSA) and</b>, problem-solving. 
 
</p>


        <div className="social-icons">
          <a href="https://www.linkedin.com/in/devikontham47" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Meghanaa47" target="_blank"><i className="fab fa-github"></i></a>
          <a href="mailto:meghanakontham28@gmail.com"><i className="fas fa-envelope"></i></a>
          <a href="https://leetcode.com/u/meghana327/" target="_blank"><i className="fas fa-code"></i></a>
        </div>

      <a href="https://drive.google.com/file/d/1j4qhzO5HiJvCTY2WH_XY2ZDPQHjyMM5i/view?usp=drive_link" target="_blank" className="btn-resume">
  View My Resume
</a>

      </div>

      <div className="home-right">
        <img src={Profile} alt="Meghana Kontham" />
      </div>
    </section>
  );
};

export default Home;
