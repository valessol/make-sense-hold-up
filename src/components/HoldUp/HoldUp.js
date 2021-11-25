import {images} from '../../assets/images/images';

const HoldUp = () => {
    return <>
        <div className="bg-holdup">
            <div className="holdup container">
                <div className="text-holdup">
                    <div className="postion-holdup">
                        <h2 className="title-holdup">¿Qué es el Hold-up?</h2>
                        <p className="sub-holdup">Es una plataforma de co-creacion entre <br/> emprendedores socioambientales y ciudadanos <br/> para dar solución a un reto específico del proyecto</p>
                    </div>
                </div>
                <div className="image-holdup">
                    <img src={images.spotlight} alt="foco" className="spotlight"/>
                </div>
            </div>
            
            {/* <img src={images.grassBean} alt="pasto con frijoles" className="been-image-bottom"/> */}
           
        </div>
    </>
}

export default HoldUp;