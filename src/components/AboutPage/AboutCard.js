import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shruti Singh Baghel </span>
            a <span className="purple"> Full Stack Developer</span>
            <br /> Experienced Full Stack Developer with more than three years of expertise in
              creating scalable applications using various technologies and programming
              languages. I consistently achieve project objectives by writing elegant and scalable
              code. Proficient in full-stack development, specializing in HTML, CSS, JavaScript,
              JQuery, and modern JavaScript frameworks. I am excited to apply my extensive
              development background and technical skills in a challenging full-stack developer
              role.
              Proficient in HTML, CSS, JavaScript, JQuery, modern JavaScript frameworks,
              and server-side languages like Node.js, Python, and .NET.
              Successfully deployed application solutions with ReactJS, BackboneJS, and
              HandlebarJS frameworks.
              Employed MongoDB and MySQL for feature development and code
              optimization.
              Developed monitoring, recovery, and backup functionalities.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight color="white"/> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight color="white" /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight color="white" /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shruti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
