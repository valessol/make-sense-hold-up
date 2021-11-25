import { Row, Col, Container } from 'react-bootstrap';
import {images} from '../../assets/images/images';
import Logo from '../NavBar/Logo';

const Footer = () => {
    return <>
        <footer>
            <Container>
            <Row>
                <Col lg={6} sm={12} md={12}>
                <p className="p-footer">_seguinos en nuestras redes</p>
                    <ul className="ul-footer">
                        <li className="li-footer"><img src={images.youtube} className="img-icon" alt=''/></li>
                        <li className="li-footer"><img src={images.facebook} className="img-icon" alt=''/></li>
                        <li className="li-footer"><img src={images.linkedin} className="img-icon" alt=''/></li>
                        <li className="li-footer"><img src={images.instagram} className="img-icon" alt=''/></li>
                        <li className="li-footer"><img src={images.twitter} className="img-icon" alt=''/></li>
                    </ul>
                </Col>
                <Col lg={6} sm={12} md={12}>
                    <div className="position-footer">
                        <div>
                            <div className="logo-footer">
                                <Logo />
                            </div>
                            <p className="sub-footer">Creemos que todos juntos con compromiso,<br/> apertura, colaboración, creatividad y<br/> aprendisaje permanente podemos crear un<br/> munto mejor y un futuro sostenible...</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="border-top"></div>
            <p className="p-copyright">© 2021 - makesense mx</p>
            </Container>
        </footer>
    </>
}

export default Footer;