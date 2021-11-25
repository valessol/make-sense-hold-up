import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getData } from '../../../data/data'
import { UserContext } from '../../Context/UserContext'

const ChallengeDetail = () => {
    const { entrepreneur, citizen } = useContext(UserContext)
    const { currentUser } = useContext(UserContext)
    const [data, setData ] = useState(null)

    

    //NOTE: la base de datos no responde
    // useEffect(()=>{
    //     getData(currentUser)
    //         .then((res)=>{
    //             setData(res.challenges[0])
    //         })
    // }, [])

    return (
        <div className="distance">
            <h2  className="subtitle blueDianneText text-center ">reto del emprendimiento</h2>
            <div className="challenge distance">{data && data.description}</div>
            {
                citizen &&
                    <p className="bodyText blueDianneText  text-center ">¡Resuelve unas preguntas para ayudar al reto del emprendedor con nuestra metodología de Hold_up!</p>
            }
            {
                entrepreneur &&
                    <div className="challengeButtons">
                        <Button className="button blueDianne saharaSandText">Editar</Button>
                        <Link to="/foro">
                            <Button className="button blueDianne saharaSandText">Ir al foro</Button>
                        </Link>
                    </div>
            }
            {
                citizen &&
                    <div className="challengeButtons">
                        <Link to="/ciudadanos/preguntas">
                            <Button className="button blueDianne saharaSandText">Ver Preguntas</Button>
                        </Link>
                        <Button className="button blueDianne saharaSandText">Ir al foro</Button>
                    </div>
            }
        </div>
    )
}

export default ChallengeDetail
