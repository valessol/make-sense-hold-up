import { Col, Row } from 'react-bootstrap';
import {images} from '../../../assets/images/images';

const Hero = () => {
    return <>
        <div className="container-background">
            <div className="container">
                <Row className="margin">
                    <Col lg={6} md={12} sm={12}>
                        <img className="people" src={images.puzzle} alt="personas"/>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="position">
                            <h1 className="title-hero">¡Participa en el Holdup!</h1>
                            <div className="content">
                                <img src={images.orangeBeanGroup} alt="bean group" className="bean-group"/>
                                <div className="size">
                                    <p className="subtitle-hero">"Explora la plataforma y ayuda a emprendedorxs a resolver retos de su proyecto a través de la inteligencia colectiva"</p>
                                </div>
                            </div>
                            <div className="green-world">
                                <img src={images.greenWorld} alt="mundo"/>
                            </div>
                        </div>
                        <div className="grass-container">
                            <img src={images.greenBush} alt="arbusto" className="grass"/>
                        </div>
                        
                    </Col>
                </Row>
                <div className="grass-container">
                    <img src={images.grass} alt="pasto" className="grass"/>
                </div>
            </div>
        </div>
    </>
}

export default Hero;