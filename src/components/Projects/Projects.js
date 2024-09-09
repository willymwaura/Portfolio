import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/mfalme.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/kinya.png";
import chatify from "../../Assets/Projects/private.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/mofrey.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Privatisation Authority"
              description="The official website of the privatization authority of kenya."
             
              demoLink=".https://www.privatisation.go.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mofreyfx E-learning platform"
              description="A e -learning platform for Mofreyfx Academy .when students of the foundation access the materials(videos and notes) provided in a self paced learning.The students can pay for the materials view card and mpesa ."

              
              demoLink="https://mofreydigiversity.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kinyathena Water Company system"
              description="A platform for a water company that does billing via sms to the customers ,allows customers to pay for the bills  and tracks the income for the company.The customers can view their balances too and download their water payment statements."

              demoLink="https://kenyathena.up.railway.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mfalme Foundation website"
              description="A website for Mfalme foundation that allows the foundation to sell its merchandise ,courses and allow users to book for events.Mpesa and card payments are integrated.

."
             
              demoLink="https://www.mfalmebetterdayscapital.com/
"
            />
          </Col>

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
