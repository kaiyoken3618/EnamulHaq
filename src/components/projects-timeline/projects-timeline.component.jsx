import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
/*(import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";*/ 
import L_IMAGECLASS from "../../assets/img/projects/image_classification.PNG";
import L_ECOM from "../../assets/img/projects/ecom.jpg"; 
import L_RESTO from "../../assets/img/projects/resto.PNG";  
import L_WPBLOG from "../../assets/img/projects/wpblog.PNG";   
import L_BANKDB from "../../assets/img/projects/bankdb.png"; 



 
import L_PORTFOLIO from "../../assets/img/projects/portfolio.jpg";


import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
/*import L_REACT from "../../assets/img/skills/react.svg";*/
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";

import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
/*import L_MONGODB from "../../assets/img/skills/mongodb.svg";*/
import Image from "react-bootstrap/Image";
/*import L_REDUX from "../../assets/img/skills/redux.svg";*/
import L_HTML5 from "../../assets/img/skills/html-5.svg";  
import L_PYTHON from "../../assets/img/skills/python.svg"; 
import L_KERAS from "../../assets/img/skills/keras.png"; 
import L_NUMPY from "../../assets/img/skills/numpy.png"; 
import L_COLAB from "../../assets/img/skills/colab.png"; 
import L_XAMP from "../../assets/img/skills/xamp.jpg"; 
import L_VS from "../../assets/img/skills/vs.png";

import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
/*import L_GIT from "../../assets/img/skills/github-api.svg";*/
/*import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";*/ 
import L_PHP from "../../assets/img/skills/php.svg"; 
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg"; 
import L_ANGULAR from "../../assets/img/skills/angular.png"; 
import L_JSON from "../../assets/img/skills/json.png"; 
import L_PLSQL from "../../assets/img/skills/plsql.png";   
import L_ORACLE from "../../assets/img/skills/oracle.png";  



import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Image Classification using Deep learning*/}
        <ImageEvent
            date="01/7/2020"
            className="text-center"
            text="Image Classification Using Deep Learning"
            src={L_IMAGECLASS}
            alt="Image Classification Using Deep Learning"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A object detection from image project using deep learning and neural network
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Can detect upto 10 different images as CIFAR10 is used as dataset to train the model</li>
                          <li>Powered by Python and Python libraries</li>
                          <li>Clean and understandable Code</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_KERAS}
                                alt="Keras"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              KERAS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NUMPY}
                                alt="Numpy"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Numpy
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_COLAB}
                                alt="Colab"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Google Colab
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/kaiyoken3618/Image-Classification"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""/*video of image classification will be given */
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: E-Commerce Website */}
<ImageEvent
            date="03/08/2020"
            className="text-center"
            text="E-Commerce Website"
            src={L_ECOM}
            alt="ECOM"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An E-Commerce Website with front-end and back-end functions. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>SignUp</li>
                          <li>Signin</li>
                          <li>Styled with  Bootstrap</li> 
                          <li>Responsive UI</li> 
                          <li>Sorting of products</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="html"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_XAMP}
                                alt="XAMP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              XAMP
                            </span>
                          </li> 
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_VS}
                                alt="VS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Vs
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/kaiyoken3618/E_Commerce_Website"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""/*VIDEO OF ECOMMERCE WILL BE GIVEN*/ 
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: html,css,javascript portfolio */}
          <ImageEvent
            date="19/08/2020"
            className="text-center"
            text="My Portfolio"
            src={L_PORTFOLIO}
            alt="PORTFOLIO"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> My first portfolio that describes myself, my goal and my career.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Responsive crossplatform</li>
                          <li>Animation and smooth transactions</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://kaiyoken3618.github.io/Enamul/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/kaiyoken3618/Enamul"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href=""/*portfolio will be given video */
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Restaurant site using angular and json api */}
          <ImageEvent
            date="28/08/2020"
            className="text-center"
            text="Restaurant Site"
            src={L_RESTO}
            alt="Restaurant Site"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A website with front end and back end functionalities.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>ADD Restaurant to list by Admin</li>
                          <li>Update List </li>
                          <li>Delete from list</li> 
                          <li>Bootstrap</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANGULAR}
                                alt="Angular"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Angular
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JSON}
                                alt="JSON"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Json Api
                            </span>
                          </li>
                          
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/kaiyoken3618/Resto_Site"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=C2YHNpqKLqo"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: WPBLOG*/}

          <ImageEvent
            date="14/01/2020"
            className="text-center"
            text="CodeGramming, A Blog Site"
            src={L_WPBLOG}
            alt="WPBLOG"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A blog website where technology,languages, 
                        frameworks related discussion and articles can be seen.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Admin can Post</li>
                          <li>Users and Admins can comment on posts</li>
                          <li>Post handling like delete , Add</li> 
                          <li>Information storage of the person who comments on posts</li> 
                          <li>Animation and Responsive UI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.youtube.com/watch?v=xasHUYKxbak"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/kaiyoken3618/WP_Blog"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Bank Database Management */}

          <ImageEvent
            date="15/9/2020"
            className="text-center"
            text="Bank Database Management System"
            src={L_BANKDB}
            alt="Bank Database Management System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A bank management system using server and hosting for transaction  
                        operations.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>operation sync between server and host side</li>
                  
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PLSQL}
                                alt="PLSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              pLsql
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ORACLE}
                                alt="ORACLE"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Oracle
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/kaiyoken3618/Bank-DBMS-using-plsql"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

           {/* Project: Portfolio using Django 
          <ImageEvent
            date="07/12/2019"
            className="text-center"
            text="Portfolio using Django"
            src={L_PortfolioUsingDjango}
            alt="Portfolio using Django"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio
                        website built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                          <li>Write a blog</li>
                          <li>
                            Hosted using Digital ocean under www.akjfun.com
                          </li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DIGITAL_OCEAN}
                                alt="Digital Ocean"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Digital-Ocean
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by
                          clicking on the button below.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://youtu.be/PCwEuW4OmWA" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>  
          </ImageEvent> */}
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
