import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { images } from '../../../assets/images/images'



export const Welcome= () => {



    return (
        <main className="welcome calypso displayFlex">
            <Container>
                <Row>
                    <Col md={7} >
                    </Col>
                    <Col md={5} >
                        <img className="image1" src={images.whiteEmprendedores} alt='make-sense emprendedores' />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h1 className="title  flamePeaText">bienvenidx al hold-up</h1>

                        <p className="bodyText  whiteText">Es el momento de colaborar con cientos de ciudadanxs con brillantes ideas para solucionar el reto  de tu emprendimiento y generar impacto juntxs.</p>

                        <p className="bodyText bold whiteText">-Para contarnos sobre tu reto primero tienes que ingresar los datos del emprendimiento al cual perteneces.</p>
                    
                        <p className="bodyText bold whiteText">-Te agradecemos por compartir con nosotros tu reto. ¡Estamos felices en poder ayudarte! Podras ver aquí  el perfil de tu reto compartido.</p>
                    </Col>
                    <Col md={6} className="welcomeSide">
                        

                        <div className="welcomeButtons">
                        
                            <Link to='/emprendedor/registro/emprendimiento'>
                                <Button className="button flamePea buttonhover">Acerca de mi emprendimiento</Button>
                            </Link>

                            <Link to='/profile'>
                                <Button className="button flamePea buttonhover">Ver el perfil de mi reto</Button>
                            </Link>

                        </div>
                    </Col>
                </Row>
                
            </Container>

        </main>
    )
}


