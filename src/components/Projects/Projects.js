import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Akhara from "../../Assets/Projects/Akhara.png";
import OneDayTogether from "../../Assets/Projects/OneDayTogether.png";
import Employee from "../../Assets/Projects/employee.png";
import job from "../../Assets/Projects/job.png";
import Bin from "../../Assets/Projects/Bin.png";
import Mart from "../../Assets/Projects/mart.png";
import word from "../../Assets/Projects/word.png"
import text from "../../Assets/Projects/text.png"


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
              imgPath={OneDayTogether}
              isBlog={false}
              title="OneDayTogether"
              description="OneDayTogether is a camping tour platform built with Python and Django, featuring MySQL for backend support. It connects adventurers with camping tours and gear, offering a seamless experience with a clean, Figma-designed interface."
              ghLink="https://github.com/Oudom19/OneDay2Gether.git"
              demoLink="https://www.figma.com/proto/N3DnDJK5xdlU2MZj5DGfIr/Untitled?node-id=0-1&t=HRcHORCLLKevNvY0-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Employee}
              isBlog={false}
              title="Employee Salary"
              description="Employee Salary is a C# application designed for managing and checking employee salaries. It features a Microsoft SQL database for secure and efficient data storage, providing a streamlined solution for salary management.  "
              ghLink="https://github.com/Chanden220/EmployeeSalaryDB.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job Application"
              description="Job Application is an Android app built with Kotlin, designed to help users browse and apply for job opportunities. It leverages external APIs to fetch and display real-time job listings, offering a seamless and user-friendly experience."
              ghLink="https://github.com/Chanden220/JobApplication-IT321-.git"
              demoLink="https://www.figma.com/proto/xmP71PxDgJWgZF9vXYBmdq/Job-App?node-id=0-1&t=TWkjLOUQJHrriXj9-1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mart}
              isBlog={false}
              title="Mart"
              description="Mart Website is an online and in-store sales platform built with Java and Spring Boot. It allows customers to place orders online or make manual purchases, with features like real-time order tracking, total price calculation, and QR code integration for seamless transactions."
              ghLink="https://github.com/phearak2003/IT312.git"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bin}
              isBlog={false}
              title="BinBrain"
              description="BinBrain is a smart waste management solution featuring motion sensors for automatic lid operation and weight sensors to monitor bin capacity. Built with Arduino code for sensor control, it connects to a website via PHP to display real-time weight data, making waste management more efficient and user-friendly."
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Akhara}
              isBlog={false}
              title="Akhara"
              description="Akhara is an official project by MOEY that develop by Kakvei, offering a digital library of storybooks for grades 7 to 12. Built with React Native, it includes features like audio playback, night/light mode, voice recording, and more, providing an interactive and accessible learning experience."
              appLink="https://play.google.com/store/apps/details?id=com.cdde.akhara&hl=en"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word}
              isBlog={false}
              title="Word Interact App"
              description="Word Interact App is a desktop application built with C# that functions similarly to Grammarly by Kakvei but is designed for the Khmer language. Developed in collaboration with Kakvei, it helps users enhance their Khmer writing with ease and accuracy."
              // appLink="https://play.google.com/store/apps/details?id=com.cdde.akhara&hl=en"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text Editor"
              description="Text Editor is a platform developed by the Kakvei, with my contribution as a team member. Designed specifically for the Khmer language, it allows users to create, edit, and save documents, offering a variety of features to enhance the writing experience."
              websiteLink="https://app.kakvei.tech/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
