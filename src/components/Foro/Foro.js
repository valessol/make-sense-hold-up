import { Container, Row, Col } from 'react-bootstrap';
import {images} from '../../assets/images/images';
import AccordionForo from './AccordionForo';

const Foro = () => {
    return <>
    <div className="bg-foro">
        <Container>
            <div className="emprendimientos">
                <h2 className="title-foro">_foro</h2>
                <img src={images.emprendimientos} className="image-emprendimientos"/>
            </div>
            <Row>
                <Col>
                    <h3 className="sub-foro">Bienvenidx al hold-up</h3>
                    <p className="p-foro">¡Preparate para generar impacto<br/> junto con emprendedores<br/> socio-ambientales!</p>
                    <div className="list-foro">
                        <ol>
                            <li className="li-foro">Explora el mapa de los<br/> emprendimientos.</li>
                            <li className="li-foro">Escoge el emprendimiento que<br/> te gustaría apoyar para resolver<br/> su reto y da clic.</li>
                            <li className="li-foro">¡Comienza tu colaboración<br/> de cocreación!</li>
                            <li className="li-foro">Asiste a los proximos talleres<br/> creativos en vivo para resolver<br/> retos de los emprendedores <a className="a-foro" href="#">AQUI</a></li>
                        </ol>
                    </div>
                </Col>
                <Col>
                    <AccordionForo />
                </Col>
            </Row>
        </Container>
    </div>
    </>
}

export default Foro;