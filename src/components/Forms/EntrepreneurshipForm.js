import { Formik } from 'formik'
import { useContext, useState } from 'react';
import { Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import * as Yup from 'yup'
import { postEntrepreneurshipData } from '../../data/data';
import { UserContext } from '../Context/UserContext';
import FileUpload from './FileUpload';

//NOTE: limpiar formulario al enviar datos
//NOTE: poner un loader 

const schema = Yup.object().shape({
    representativeName: Yup.string().required('Este campo es obligatorio'),
    representativeEmail: Yup.string().email('El correo electrónico es inválido').required('Este campo es obligatorio'),
    email: Yup.string(),
    name: Yup.string().required('Este campo es obligatorio'),
    description: Yup.string().required('Este campo es obligatorio'),
    file: '',
    confirmWorkshop: Yup.bool().notRequired(),
})

export const EntrepreneurshipForm = () => {
  const [ successMessage, setSuccessMessage ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState(false)
  const [ file, setFile ] = useState('')
  const { currentUser } = useContext(UserContext)
  const { push } = useHistory()


  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0])
  // }

  return (
    <Formik
      validationSchema={schema}
      validateOnBlur
      onSubmit={values => {
        console.log(values)
          setErrorMessage(false)
          setSuccessMessage(false)
          postEntrepreneurshipData(values, currentUser)
            .then((res)=> {
              console.log(res)
              setSuccessMessage(true)
            })
            .catch((err)=>{
              console.log(err)
              setErrorMessage(true)
            })
      }}
      initialValues={{
        representativeName: '',
        representativeEmail: '',
        email: currentUser,
        name: '',
        description: '',
        file:file,
        confirmWorkshop: false,
      }}
    > 
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="entrepreneurForm forms">
          

            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label className="saharaSandText bodyText--small label">1. Nombre del representante del emprendimiento</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="representativeName"
                value={values.representativeName}
                onChange={handleChange('representativeName')}
                onBlur={handleBlur('representativeName')}
                isInvalid={touched.representativeName && errors.representativeName}
              />
              <Form.Control.Feedback type="invalid">{errors.representativeName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik02">
              <Form.Label className="saharaSandText label bodyText--small">2. Correo electrónico de un integrante</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                    className="input"
                    type="email"
                    name="representativeEmail"
                    value={values.representativeEmail}
                    onChange={handleChange('representativeEmail')}
                    onBlur={handleBlur('representativeEmail')}
                    isInvalid={touched.representativeEmail && errors.representativeEmail}
                />

                <Form.Control.Feedback type="invalid">{errors.representativeEmail}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label className="saharaSandText bodyText--small label">3. Nombre del emprendimiento</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  className="input"
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="name"
                  value={values.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label className="saharaSandText  bodyText--small label">4. Breve descripción del emprendimiento</Form.Label>
              <Form.Control
                className="input"
                type="textarea"
                rows={1}
                name="description"
                value={values.description}
                onChange={handleChange('description')}
                onBlur={handleBlur('description')}
                isInvalid={!!errors.description}
              />

              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label className="saharaSandText bodyText--small label">5. Sube tu logo</Form.Label>
              {/* <Form.Control
                className="input"
                type="file"
                name="file"
                value={values.file}
                onChange={handleChange('file')}
                onBlur={handleBlur('file')}
                isInvalid={!!errors.file}
              /> */}
              <FileUpload
                className="input"
                type='file'
                name='file'
                value={values.file}
                //onChange={handleFileChange('file')}
                onBlur={handleBlur('file')}
                isInvalid={!!errors.file}
              />
              <Form.Control.Feedback type="invalid">
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>

          

          <Form.Group className="mb-3">
            <Form.Label 
              as={Col} 
              md="12" 
              className="saharaSandText bodyText--small label"
            >
              6. ¿Te gustaría recibir un taller en vivo que facilite un voluntario para resolver tu reto?
            </Form.Label>  
            <Form.Check
              className="saharaSandText"
              name="confirmWorkshop"
              label="Sí, me gustaría"
              onChange={handleChange('confirmWorkshop')}
              onBlur={handleBlur('confirmWorkshop')}
              feedback={errors.confirmWorkshop}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>

          <Form.Group as={Col} md="12">
            <Button 
              type="submit" 
              className="button flamePea">
                Enviar
            </Button>
            { 
              successMessage && 
                <p className="text-center saharaSandText bodyText--small">¡Registro realizado con exito! Avanza a la siguiente pantalla para continuar.</p>
            }
            { 
              errorMessage && 
                <p className="text-center bodyText--small" style={{color: 'red'}}>El registro no se ha podido completar. Por favor, intentalo nuevamente</p>
            }
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

