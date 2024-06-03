import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects(pageData) {
  return ( 

    <div className={`page-container ${pageData.pageType}`} data-page-type ={pageData.pageType}>
        
        <div className="page-body">
        <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Asssignment"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/baghel25/React-asssignment"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Porfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/baghel25/shrutiBaghel_porfolio"
              demoLink="https://baghel25.github.io/shrutiBaghel_porfolio/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chatbot flow builder"
              description="Creating a chatbot flow builder as a React project involves designing an interface where users can create, edit, and visualize chatbot conversation flows. Below is a basic example of how to structure such a project. The example will include a main page for building the flow, and components for displaying and editing nodes and connections."
              ghLink="https://github.com/baghel25/Chatbot-flow-builder"
              demoLink="https://baghel25.github.io/Chatbot-flow-builder/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
                  title="Real-Estate"
                  description="This project is a full-stack application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to list properties for sale and for buyers to view and express interest in those properties.

                  Project Structure The project is divided into two main directories: backend and frontend.
                  
                  Backend The backend is built using Node.js, Express.js, and MongoDB. It includes controllers, models, routes, and services to handle user authentication and property management."
              ghLink="https://github.com/baghel25/real-estate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Dockerized CRUD  "
              description='Creating a Dockerized CRUD (Create, Read, Update, Delete) application involves several steps. Below is a detailed guide for setting up and deploying a simple CRUD app using React for the frontend, Node.js/Express for the backend, and MongoDB for the database. The project will be containerized using Docker.'
                ghLink="https://github.com/baghel25/docker-owner-app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
        </div>
    </div>
    
  );
}

export default Projects;
