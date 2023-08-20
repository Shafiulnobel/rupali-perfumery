import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faPuzzlePiece, faFileShield, faChartLine, faArrowsToDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='bg-black pt-5 pb-2'>
            <Container>
                <Row xs={1} md={4} className="g-4 font text-white">
                    <Col>
                        <h3>QUICK LINKS</h3>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Home</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/about">About us</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Privacy Policy</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Terms & Conditions</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Refund & Returns Policy</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Shipping Policy</NavLink></h5>
                    </Col>
                    <Col>
                        <h3>Categories</h3>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Regular</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Premium Collection</NavLink></h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faArrowsToDot} /><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/">Prime</NavLink></h5>
                    </Col>
                    <Col>
                        <h3>Contact US</h3>
                        <h5>Excell Fragrances, Shed no1, Thakaracha pada road, Tarai, Bhiwandi 421308</h5>
                        <h5><FontAwesomeIcon className='fs-5 me-2' icon={faEnvelope} /> abc@gmail.com</h5>

                    </Col>
                    <Col>
                        <h3>OUR NEWSLETTER</h3>
                        <h5>Sign up here to get the latest news, updates and special offers delivered to your inbox.</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="enter your email" />
                            </Form.Group>
                            <Button variant="light">Send</Button>{' '}
                        </Form>

                    </Col>
                </Row>
                <hr style={{color:'white'}}/>
                <h6 className='text-white text-center'>© 2023 The Secret Story All right reserved | Designed with Passion</h6>
            </Container>

        </div>
    );
};

export default Footer;