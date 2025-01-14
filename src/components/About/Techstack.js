import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiBootstrap,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiMysql,
  SiDjango,
  SiMicrosoftsqlserver,
  SiKotlin
} from "react-icons/si";
import { FaPhp, FaReact, FaDatabase } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {/* C++ */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp /> {/* C# */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp /> {/* PHP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> {/* Bootstrap */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss /> {/* Tailwind CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact /> {/* React Native */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango /> {/* Django */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* MySQL Workbench */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver /> {/* Microsoft SQL Server Management Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin /> {/* Kotlin */}
      </Col>
    </Row>
  );
}

export default Techstack;
