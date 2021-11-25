import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { set } from 'react-hook-form';
import { useHistory } from 'react-router';
import { images } from '../../assets/images/images';
import { postChallengeData } from '../../data/data';
import { AuthContext } from '../Context/AuthContext';
import { UIContext } from '../Context/UIContext';
import { UserContext } from '../Context/UserContext';
import { PopUp } from '../PopUp/PopUp';
import { CitizenForm } from './CitizenForm';
import { EntrepreneurshipForm } from './EntrepreneurshipForm';

const Registration = ({background, fontColor, title, image, alt}) => {
    const {entrepreneur, citizen } = useContext(UserContext);
    const {currentUser} = useContext(AuthContext);
    const { success, setSuccess } = useContext(UIContext)
    const [modalShow, setModalShow] = useState(false);
    const [ message, setMessage ] = useState('')
    const { push } = useHistory()
    const [ values, setValues ] = useState({
        type : '',
        description : '',
        shortDescription :''
    })

    const { type, description, shortDescription } = values;

    const handleChange = (e) => {
        e.preventDefault();
        return setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        
    }

    const handlePopUp = (error) => {
        setMessage(error)
        setModalShow(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postChallengeData(values, currentUser)
            .then((res)=>{
                console.log(res)
                setSuccess(true)  
                handlePopUp()
                setTimeout(()=>{
                  push('/profile')
                }, 2000) 
            })
            .catch((err)=>{
                setSuccess(false)
                console.log(err)
                    handlePopUp(err.message)
            })
           
    }

    return (
        <>
            <main style={{backgroundColor:background, }} className="registrationForms">
                
                <Container>
                    <Row>
                        <Col md={7} className="formsImages">
                        </Col>
                        <Col md={5} className="formsImages">
                            <img className="image1" src={image} alt={alt}/>
                        </Col>
                    </Row>
    
                        <Row>
                        {
                            citizen &&
                                <>
                                    <Col md={7}>
                                        <h1 className="subtitle tabletAlign" style={{color:fontColor}}>{title}</h1>
                                        <CitizenForm handlePopUp={handlePopUp}/>
                                    </Col>
                                    <Col md={5} className="formsImages">
                                        {/* <img className="image1" src={image} alt={alt}/> */}
                                        <img className="image2" src={images.greenWorld} alt='make-sense mundo verde'/>
                                        <img className="image3" src={images.puzzle} alt='entre todos podemos lograr el cambio'/>
                                    </Col>
                                </>
                        }
                        {
                            entrepreneur &&
                                <>
                                    <Col md={7}>
                                        <h1 className="title" style={{color:fontColor}}>{title}</h1>
                                        <EntrepreneurshipForm />

                                        <div className="whiteText">
                                            <p className="formsText">Si ya nos contaste de tu emprendimiento nos gustaria guiarte pensando en estas preguntas, para que identifiques de la mejor manera el reto final con el que recibirás apoyo:</p>

                                            <ol>
                                                <li className="formsText">¿Cuál es el mayor reto que vive hoy tu emprendimiento?</li>
                                                <li className="formsText">¿Por qué crees que tienes este reto? ¿Hay alguna otra causante del reto?</li>
                                                <li className="formsText">¿Quien es la persona que se ve más afectada por tu reto? (Personas de tu equipo, tus beneficiarioss, proveedor, etc.)</li>
                                            </ol>
                                        </div>
                                    </Col>
                                    <Col md={5} className="formsImages">
                                        <img className="image2" src={images.greenWorld} alt='make-sense mundo verde'/>
                                        <img className="image3" src={images.building} alt='entre todos podemos lograr el cambio'/>
                                    </Col>
                                </>
                        }
                    </Row>
                </Container>
            </main>

            {
                entrepreneur &&

                    <section className="challengeForm forms" id="challenge">
                        <Container>
                            <Row>
                                <Col md={7}>
                                    <h2 className="title calypsoText">mi reto</h2>
                                    <Form>
                                        <Form.Label className="calypsoText bodyText--small label">
                                            1. Elije una opción para clasificar tu reto
                                        </Form.Label>

                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3 calypsoText">
                                                <Form.Check
                                                    inline
                                                    className="radio"
                                                    label="Transformación social"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                    value='transformacion'
                                                    onChange={handleChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    className="radio"
                                                    label="Comunidad e Innovación"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    value='comunidad'
                                                    onChange={handleChange}
                                                /> 
                                                <Form.Check
                                                    inline
                                                    className="radio"
                                                    label="Reducción de desigualdad"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                    value='desigualdad'
                                                    onChange={handleChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    className="radio"
                                                    label="Acción climática"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-4`}
                                                    value='climatico'
                                                    onChange={handleChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    className="radio"
                                                    label="Tejido Social"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-5`}
                                                    value='tejido'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        ))}

                                        <Form.Label className="calypsoText bodyText--small label">
                                            2. Cuentanos sobre tu reto
                                        </Form.Label>
                                        <Form.Control
                                            className="input saharaSand"
                                            type="textarea"
                                            rows={1}
                                            name="description"
                                            value={description}
                                            onChange={handleChange}
                                        />

                                        <Form.Label className="calypsoText bodyText--small label">
                                            3. Ahora describe en menos de 10 palabras tu reto
                                        </Form.Label>
                                        <Form.Control
                                            className="input saharaSand"
                                            type="textarea"
                                            rows={1}
                                            name="shortDescription"
                                            value={shortDescription}
                                            onChange={handleChange}
                                        />

                                        <Button 
                                            variant="primary" 
                                            type="submit" 
                                            className="button calypso"
                                            onClick={handleSubmit}
                                        >
                                            Enviar
                                        </Button>
                                        {
                                            modalShow && <PopUp show={modalShow} onHide={() => setModalShow(false)} />
                                        }
                                    </Form>  
                                </Col>
                                <Col md={5} className="formsImages">
                                        <p className="subtitle calypsoText">¡Ya estamos listxs para para escribir sobre tu reto  y recibir el apoyo para resolverlo!</p>
                                        <img className="image4" src={images.ok} alt='make-sense emprendedores'/>
                                    </Col>
                            </Row> 
                        </Container>
                    </section>
            }
            {
                modalShow && <PopUp show={modalShow} message={message} onHide={() => setModalShow(false)} />
            }
        </>
    )
}

export default Registration
