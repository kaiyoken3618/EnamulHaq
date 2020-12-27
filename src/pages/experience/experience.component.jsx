import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">B.Sc in</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Computer Science and Engineering</strong>
                    <br />
                    <strong>Institution:</strong><a href="http://www.aust.edu/"> Ahsanullah University of Science and Technology</a>
                    <br />
                    <strong>Duration:</strong> January 2016 - December 2020
                    <br/>
                   
                    <ul className="text-left">
                      <li>Comulative Credit Completed 161.25/161.25. </li>
                    
                      <li>I was selected for ITEE Training Program which comprised of 20 students in the CSE department.
                      </li>
                    

                    </ul> 
                     
                     
                    
                    
                  </Card.Text> 
                   
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Higher Secondary Studies</strong>
                    <br />
                    <strong>Institution:</strong><a href="http://www.drmc.edu.bd/"> Dhaka Residential Model College</a>
                    <br />
                    <strong>Duration:</strong> January 2013 - December 2015
                    <br/>
                  
                    <ul className="text-left">
                      <li> <strong>Result:</strong> GPA 5.00 in scale of 5.00 </li>
                    
  
                    

                    </ul> 
                     
                     
                    
                    
                  </Card.Text>  
                   
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Secondary School Studies</strong>
                    <br />
                    <strong>Institution:</strong><a href="http://www.drmc.edu.bd/"> Dhaka Residential Model College</a>
                    <br />
                    <strong>Duration:</strong> January 2005 - December 2013
                    <br/>
                  
                    <ul className="text-left">
                      <li> <strong>Result:</strong> GPA 5.00 in scale of 5.00 </li>
                    
  
                    

                    </ul> 
                     
                     
                    
                    
                  </Card.Text>  
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
