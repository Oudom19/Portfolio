import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiAnaconda,
  SiAdobe,
  SiFigma,
  SiAndroidstudio
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Visual Studio Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda /> {/* Anaconda Navigator */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> {/* AndroidStudio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe /> {/* Adobe Photoshop */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma */}
      </Col>
    </Row>
  );
}

export default Toolstack;
