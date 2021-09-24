import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Rocket } from "react-ionicons";
import ImgFlag from '../images/mission-flag.jpg' 
import ImgOblationStatues from '../images/mission-oblation-statues.jpg'
import ImgUpVisayas from '../images/mission-up-visayas.jpg'
import ImgClassroom from '../images/mission-classroom.jpg'
// import "./mission.css";
function Mission() {
  return (
    <div id="mission">
      <Container className="mt-4 px-5 ">
        <Row xs={1} sm={1} md={2} lg={2}>
          <Col>
            <h2>
              <Rocket
                color={"#ff0000"}
                height="2rem"
                width="2rem"
                className="pr-3"
              />
              Our Mission
            </h2>
            <div className="pt-5 pt-md-4">
              <p>
                The Foundation’s mission is to liberate poor but deserving
                students from poverty through access to education. It believes
                in the value of education and is dedicated to improving the
                lives of disadvantaged young individuals by providing
                educational assistance such as scholarships, tuition assistance,
                and stipends, for qualified students.
              </p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col xs={6} sm={6} med={6} lg={6} className='p-0'>
                <Image fluid src={ImgFlag} />
              </Col>
              <Col xs={6} sm={6} med={6} lg={6} className='p-0'>
                <Image fluid src={ImgOblationStatues} />
              </Col>
              <Col xs={6} sm={6} med={6} lg={6} className='p-0'>
                <Image fluid src={ImgUpVisayas} />
              </Col>
              <Col xs={6} sm={6} med={6} lg={6} className='p-0'>
                <Image fluid src={ImgClassroom} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mission;
