import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Rocket } from "react-ionicons";
import ImgFlag from '../images/mission-flag.jpg' 
import ImgOblationStatues from '../images/mission-oblation-statues.jpg'
import ImgUpVisayas from '../images/mission-up-visayas.jpg'
import ImgClassroom from '../images/mission-classroom.jpg'
import "./mission.css";
function Mission() {
  return (
    <Container className="mission" id="mission">
      <Row>
        <Col>
          <h1>
            <Rocket
              color={"#ff0000"}
              height="2.4rem"
              width="2.4rem"
              className="pr-3"
            />
            Our Mission
          </h1>
          <div className=" pt-5 mission-text">
            <p>
              The Foundation’s mission is to liberate poor but deserving
              students from poverty through access to education. It believes in
              the value of education and is dedicated to improving the lives of
              disadvantaged young individuals by providing educational
              assistance such as scholarships, tuition assistance, and stipends,
              for qualified students.
            </p>
          </div>
        </Col>
        <Col>
          <Row lg={2}>
            <Col>
              <Image width="240px" height="240px" src={ImgFlag} />
            </Col>
            <Col>
              <Image width="240px" height="240px" src={ImgOblationStatues} />
            </Col>
            <Col>
              <Image width="240px" height="240px" src={ImgUpVisayas} />
            </Col>
            <Col>
              <Image width="240px" height="240px" src={ImgClassroom} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Mission;
