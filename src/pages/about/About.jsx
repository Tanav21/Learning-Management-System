import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2 className="heading">About Wisdom Wave</h2>
        <p className="para">
          <strong>Wisdom Wave</strong> is an innovative Learning Management System (LMS)
          designed to foster an engaging, intuitive, and holistic educational experience.
          Developed by <strong>Team Wisdom</strong>, Wisdom Wave offers a platform where
          educators and students can seamlessly connect, share resources, and track academic progress.
          <br /><br />
          The core philosophy behind Wisdom Wave is to make learning more accessible and meaningful
          by combining modern technology with interactive features. With its user-friendly interface
          and robust tools, the platform supports a wide range of academic activities, from course
          creation and management to student engagement and performance tracking.
          <br /><br />
          Whether you're a student looking to explore new subjects or an educator aiming to create
          impactful courses, Wisdom Wave empowers you to take your learning journey to the next level.
          Our mission is to make education more <strong>personalized</strong>, <strong>collaborative</strong>,
          and <strong>effective</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;