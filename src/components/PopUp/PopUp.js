import React, { useContext } from 'react'
import { Modal, Button, Image } from 'react-bootstrap';
import { images } from '../../assets/images/images';
import { UIContext } from '../Context/UIContext';

export const PopUp = (props) => {
  const { success } = useContext(UIContext)

    return (
      <Modal
        {...props}
        dialogClassName="modalPopUp"
        size="lg"
        aria-labelledby="success-popUp"
        centered
      >
        <Modal.Body>
          <Image className="popUpImage" src={images.successPopUp} rounded /> 
          <h3 className="subtitle successTitle">
          {
            success 
              ? 'Gracias por ser parte de'
              :`Ha ocurrido un error. Por favor, intentalo nuevamente.`
          }
          </h3>
          {
            !success && <p className="text-center">Error: {props.message === 'Request failed with status code 500' && 'No se ha podido conectar al servidor'}</p>
            //NOTE: este es el unico error que existe???
          }
          {
            success &&
              <Image className="popUpImage logoMakeSense" src={images.blueMakeSensePlus} rounded /> 
          }
        </Modal.Body>
      </Modal>
    );
  }
  


