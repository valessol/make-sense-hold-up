import { Button, Container, Row, Col } from 'react-bootstrap';
import {images} from '../../assets/images/images';
import FormRegister from './FormRegister';

const Register = () => {
    return<>
    <div className="bg-login">
            <Container>
                <Row>
                    <Col>
                        <h2 className="title-login">¡Registrate!</h2>
                        <Button className="btn-google"><img src={images.google} className="google"/>Conéctate con Google</Button>
                        <FormRegister />
                    </Col>
                    <Col>
                        <img src={images.blueMakeSensePlus} className="emprendedores"/>
                        <div className="register-position">
                            <img src={images.girl} className="image-login"/>
                            <img src={images.guy} className="image-login"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

export default Register;