import { Formik } from 'formik'
import { useContext, useState } from 'react';
import { Col, Form, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import * as Yup from 'yup'
import { postCitizenData } from '../../data/data';
import { UserContext } from '../Context/UserContext';
import { UIContext } from '../Context/UIContext';


const schema = Yup.object().shape({
    name: Yup.string().required('Este campo es obligatorio'),
    email: Yup.string().email('El correo electrónico es inválido').required('Este campo es obligatorio'),
    analytics: Yup.string().required('Este campo es obligatorio'),
    question1: Yup.string().required('Este campo es obligatorio'),
    question2: Yup.string().required('Este campo es obligatorio'),
    question3: Yup.string().required('Este campo es obligatorio'),
    question4: Yup.string().required('Este campo es obligatorio'),
    question5: Yup.string().required('Este campo es obligatorio'),
    question6: Yup.bool().notRequired(),
})

export const CitizenForm = ({handlePopUp}) => {
  const { currentUser } = useContext(UserContext)
  const { success, setSuccess } = useContext(UIContext)
  const { push } = useHistory()

//NOTE: uicontext success=true entonces handlePopUp
  return (
    <Formik
      validationSchema={schema}
      validateOnBlur
      onSubmit={values => {
          setSuccess(false)
          postCitizenData(values, currentUser)
            .then((res)=> {
              console.log(res)
              setSuccess(true) 
              handlePopUp()
            })
            .catch((err)=>{
              console.log(err)
                handlePopUp()
            })
            .finally(()=>{
                if(success)
                setTimeout(()=>{
                  push('/foro')
                }, 3000) 
            })
      }}
      initialValues={{
        name: '',
        email: '',
        analytics: '',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: false,
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
        <Form noValidate onSubmit={handleSubmit} className="citizenForm forms">
          

            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label className="blueDianneText bodyText--small label">1. ¿Cuál es tu nombre?</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                isInvalid={touched.name && errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik02">
              <Form.Label className="blueDianneText label bodyText--small">2. ¿Cuál es tu correo?</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                    className="input"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    isInvalid={touched.email && errors.email}
                />

                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label className="blueDianneText bodyText--small label">3. ¿Cómo conociste make_sense?</Form.Label>
              <InputGroup hasValidation>
                <Form.Select 
                    aria-label="como conociste make-sense"
                    className="input"
                    name="analytics"
                    value={values.analytics}
                    onChange={handleChange('analytics')}
                    onBlur={handleBlur('analytics')}
                    isInvalid={!!errors.analytics}
                >
                    <option>Elige una opción</option>
                    <option value="facebook">Facebook</option>
                    <option value='instagram'>Instagram</option>
                    <option value="google">Google</option>
                    <option value="otros">Otros</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.analytics}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label className="blueDianneText  bodyText--small label">4. Si fueras Steve Jobs, ¿qué harías para resolver este reto?</Form.Label>
              <Form.Control
                className="input"
                type="textarea"
                rows={1}
                name="question1"
                value={values.question1}
                onChange={handleChange('question1')}
                onBlur={handleBlur('question1')}
                isInvalid={!!errors.question1}
              />

              <Form.Control.Feedback type="invalid">
                {errors.question1}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label className="blueDianneText bodyText--small label">5. Si no pudieras utilizar internet, ¿qué harías para resolver ese reto?</Form.Label>
              <Form.Control
                className="input"
                type="textarea"
                name="question2"
                value={values.question2}
                onChange={handleChange('question2')}
                onBlur={handleBlur('question2')}
                isInvalid={!!errors.question2}
              />
              <Form.Control.Feedback type="invalid">
                {errors.question2}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label className="blueDianneText bodyText--small label">6. ¿Cuál es la mejor idea para resolver el reto?</Form.Label>
              <Form.Control
                className="input"
                type="textarea"
                name="question3"
                value={values.question3}
                onChange={handleChange('question3')}
                onBlur={handleBlur('question3')}
                isInvalid={!!errors.question3}
              />
              <Form.Control.Feedback type="invalid">
                {errors.question3}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label className="blueDianneText bodyText--small label">7. ¿Cuál es la peor idea para resolver el reto?</Form.Label>
              <Form.Control
                className="input"
                type="textarea"
                name="question4"
                value={values.question4}
                onChange={handleChange('question4')}
                onBlur={handleBlur('question4')}
                isInvalid={!!errors.question4}
              />
              <Form.Control.Feedback type="invalid">
                {errors.question4}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label className="blueDianneText bodyText--small label">8. Ahora convierte esa mala idea en una buena idea</Form.Label>
              <Form.Control
                className="input"
                type="textarea"
                name="question5"
                value={values.question5}
                onChange={handleChange('question5')}
                onBlur={handleBlur('question5')}
                isInvalid={!!errors.question5}
              />
              <Form.Control.Feedback type="invalid">
                {errors.question5}
              </Form.Control.Feedback>
            </Form.Group>

          

          <Form.Group className="mb-3">
            <Form.Label 
              as={Col} 
              md="12" 
              className="blueDianneText bodyText--small label"
            >
              9. ¿Te gustaria ayudar a este emprendedor a diseñar un taller creativo para resolver su reto?
            </Form.Label>  
            <Form.Check
              className="blueDianneText "
              name="question6"
              label="Sí, me gustaría"
              onChange={handleChange('question6')}
              onBlur={handleBlur('question6')}
              feedback={errors.question6}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>

          <Form.Group as={Col} md="12">
            <Button 
              type="submit" 
              className="button calypso">Enviar respuesta</Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

