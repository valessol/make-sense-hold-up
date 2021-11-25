import Logo from "../../Entrepreneur/Logo/Logo";
import { Button, Container, Row, Col} from "react-bootstrap"
import ChallengeDetail from "../ChallengeDetail/ChallengeDetail";
import { images } from "../../../assets/images/images";
import { useContext, useEffect, useState } from "react";
import { getData } from "../../../data/data";
import { UserContext } from "../../Context/UserContext";
import { AuthContext } from "../../Context/AuthContext";

//NOTE: falta poder subir el logo

export const ChallengeProfile = () => {

    const [data, setData ] = useState(null)
    const { entrepreneur, citizen } = useContext(UserContext)
    const { currentUser, authEntrepreneur } = useContext(AuthContext)
    

    //NOTE: usar useParams para reutilizar este componente en la vista del challenge profile para el ciudadano en funcion de cual es el desafio elegido
    //NOTE: que el comienza ahora del navBar se cambie a LOGOUT


    useEffect(()=>{
        getData(currentUser)
            .then((res)=>{
                setData(res)
                console.log(res)
            })
    }, [])
    
    return (
        <main className="flamePea challengeProfile">

            <img className="challengeProfileImage" src={images.people} alt='' />

            <Container className="mobile">
                <Row>
                    <Col md={7}/>
                    <Col md={5}>
                        <img className="screenType" 
                            src={
                                (authEntrepreneur && entrepreneur)
                                    ? images.whiteEmprendedores 
                                    : citizen && images.whiteCiudadanos
                                    } 
                            alt='make-sense'
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={7}/>
                    <Col md={5}>
                        {
                            citizen &&
                                <div className="
                                    button 
                                    silverTree 
                                    responseCounter
                                    "
                                >{
                                    data && data.challenges[0].citizens.length
                                } 
                                    <span>respuestas recolectadas</span>
                                </div>
                        }
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="">
                        <h2 className="
                            subtitle 
                            blueDianneText
                            text-center 
                            distance"
                        >
                            {entrepreneur && 'perfil de tu reto'}
                            {citizen && '¡Ayuda a resolver el reto con tus ideas!'}
                        </h2>
                        {
                            data && data.file && <Logo img={data.file} />
                        }
                        {/* Este componente se coloca solamente a los fines de la presentación, y debe eliminarse cuando el proyecto pase a producción */}
                        <Logo img={data && data.file && data.file}/>

                        <div className="distance">
                            <h3 className="bodyText text-center mg-2"> {data && data.name}</h3>
                            <p className="bodyText text-center  mg-2">{data && data.description}</p>
                        </div>
                    </Col>
                    <Col md={6} className="">
                        <ChallengeDetail />
                    </Col>
                </Row>
            </Container>
        </main>
    )
} 