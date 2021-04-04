import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from "reactstrap";


//Import Images
import homeImg from "../../assets/images/home-img.png";
import bg from "../../assets/images/bg.jpg";
import bg1 from "../../assets/images/muskie_bg.png";
import bg2 from "../../assets/images/muskie_bg2.jpg"
import bg3 from "../../assets/images/muskie_bg3.jpg"
import bg4 from "../../assets/images/muskie_bg4.jpg"


class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero-section-5" id="home" style={{ background: `url(${bg4})`, backgroundSize: "cover"}}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8} >
                                <div className="hero-wrapper text-center">
                                    <p className="font-16 text-uppercase text-white-50">Discover Muskie Black Today</p>
                                    <h1 className="hero-title text-white mb-4"><span className="text-primary">Muskie Black Management & Consulting</span><br /></h1>

                                    <p className='font-20 text-white'>Assisting your business virtually. Wherever. Whenever.</p>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Enquire Now</Link>
                                        {/* <Link to="#" className="btn btn-success mt-2 mr-2 ml-1">Learn more</Link> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;