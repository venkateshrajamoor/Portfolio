import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import cha from "../../Assets/Projects/cha.png";
import suicide from "../../Assets/Projects/suicide.png";
import bl from "../../Assets/Projects/bl.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={cha}
              isBlog={false}
              title="React-Chat-App"
              description="A chat application where the registered user's can chat among themselves with each other in a secure fashion .Technologies used : react.js,External css for styling and the database used is firebase where the user's chats along with their information is stored"
              ghLink="https://github.com/venkateshrajamoor/Final-React-Chat-App"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bl}
              isBlog={false}
              title="Resume-Builder"
              description="A website which is responive and can create resume's by taking the details of the user's by which user can get the high ats friendly resume .Ats: application tracking system which makes the recruiter's work easily finding the details of the candidate by this resume.Techniologies used are :next.js,tailwid css"
              ghLink="https://github.com/venkateshrajamoor/Techplement-Final-Project"
              demoLink="https://techplement-final-project.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ev-recharge-bunk"
              description="Ev-recharge bunk is an mobile application where the user can find if there are any near by ev-rechage-stations available if so they can book in advance so that chances of time waste comes down and admin can add the bunks as well based on the location of the user they can find the bunks "
              ghLink="https://github.com/venkateshrajamoor/ev_recharge_bunk"
              demoLink="ev-recharge-bunk-tau.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic tac toe is a game where two user's can play and the turn will change for every move of the user and when the user make three correct sides then that user will win when even after all the blocks are filled no one win then it is considered as tie"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://tic-tac-toe-nu-mauve-52.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather-App"
              description="This is a weather app where we can find out the current weather of any city we want and also not only the temperatre but also the wind conditions and sunrise time are given ."
              ghLink="https://github.com/venkateshrajamoor/Weather-app"
              demoLink="https://weather-app-eight-eta-44.vercel.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Gym-Management-System"
              description="Gym management system works for the users members and the admin who owns the gym where admin can create a bill notify the members as well and the member have all the pay slips recorded and diet plans as well and the user can be able tolook at the status of the gym."
              ghLink="https://github.com/venkateshrajamoor/Gym-management-system"
              demoLink="http://gym-management-system-sigma-ashy.vercel.app"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
