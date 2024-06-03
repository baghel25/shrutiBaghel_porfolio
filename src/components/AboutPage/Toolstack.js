import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
} from "react-icons/si";

import BilFigma from '@meronex/icons/bi/BilFigma';

import AiFillChrome from '@meronex/icons/ai/AiFillChrome';
import AiFillGithub from '@meronex/icons/ai/AiFillGithub';
import FaDocker from '@meronex/icons/fa/FaDocker';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <AiFillChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>


    </Row>
  );
}

export default Toolstack;
