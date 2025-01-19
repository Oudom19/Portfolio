import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi, I’m <b className="purple">Oudom</b>, a motivated fourth-year Computer Science and Engineering student passionate about web and app development. I specialize in frontend development and am eager to apply and enhance my skills in real-world projects. Here is my certificate of getting GPA 4.0 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing research about technologies and AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports such as Football and Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
