import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { 
  SiRedis,
  SiFirebase, 
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import FaAngular from '@meronex/icons/fa/FaAngular';
import { TbBrandGolang } from "react-icons/tb";
import BilJquery from '@meronex/icons/bi/BilJquery';
import DiBackbone from '@meronex/icons/di/DiBackbone';
// 
import LgHandlebars from '@meronex/icons/lg/LgHandlebars';
import DiCoffeescript from '@meronex/icons/di/DiCoffeescript';
import AiFillHtml5 from '@meronex/icons/ai/AiFillHtml5';
import BilCss3 from '@meronex/icons/bi/BilCss3';
import BilLess from '@meronex/icons/bi/BilLess';
import DiMysql from '@meronex/icons/di/DiMysql';
import GrSemantics from '@meronex/icons/gr/GrSemantics';
import BsFillBootstrapFill from '@meronex/icons/bs/BsFillBootstrapFill';
import SiMaterialUi from '@meronex/icons/si/SiMaterialUi';
import FaDocker from '@meronex/icons/fa/FaDocker';



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BilJquery color="#ffffff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBackbone color="#ffffff"   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <LgHandlebars />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCoffeescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BilCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BilLess />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrSemantics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBootstrapFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialUi />
      </Col>

    </Row>
  );
}

export default Techstack;
