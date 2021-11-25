import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {images} from '../../assets/images/images';

const Start = () =>{
    return <>
        <div className="bg-start" id="start">
            <Container>
                <h2 className="title whiteText title-start">comienza ahora</h2>
                <div className="start-content">
                    <div className="map-container">
                        <img src={images.map} alt="mapa" className="image-map"/>
                    </div>
                    <Row className="margin-btn">
                        <Col lg={12} className="btn-position">
                            <Link to="/emprendedor/login">
                                <Button className="subtitle flamePea blueDianneText">Quiero participar como emprendedxr</Button>
                            </Link>
                        </Col>
                        <Col lg={12} className="btn-position">
                            <Link to="/foro">
                                <Button className="silverTree subtitle">Quiero participar como ciudadanx</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
            <img src={images.cespedbeans} alt="pasto con frijoles" className="been-image-top"/>
        </div>
    </>
}

export default Start;