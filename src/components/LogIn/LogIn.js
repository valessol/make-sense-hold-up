import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {images} from '../../assets/images/images';
import FormLogin from './FormLogin';

const LogIn = () => {
    return<>
        <div className="bg-login">
            <Container>
                <Row>
                    <Col>
                        <h2 className="title-login">Iniciar Sesión</h2>
                        <Button className="btn-google"><img src={images.google} className="google"/>Conéctate con Google</Button>
                        <FormLogin />
                        <div className="login-container">
                            <p className="p-login">¿Has olvidado tu contraseña?</p>
                            <p className="p-login">¿No tienes una cuenta?<Link to="/emprendedor/registro" className="a-login">Crea una aqui</Link></p>
                        </div>
                    </Col>
                    <Col>
                        <img src={images.emprendedores} className="emprendedores"/>
                        <div className="login-position">
                            <img src={images.girl} className="image-login"/>
                            <img src={images.guy} className="image-login"/>
                        </div>
                        <p className="sub-login">¿Cómo me pueden ayudar en mi emprendimiento?</p>
                        <ol className="ol-login">
                            <li className="li-login">Registrate en la plataforma</li>
                            <li className="li-login">Llena el perfil de tu emprendimiento</li>
                            <li className="li-login">Sigue las instrucciones del hold-up<br/> para publicar tu reto en el foro<br/> de emprendedores</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

export default LogIn;