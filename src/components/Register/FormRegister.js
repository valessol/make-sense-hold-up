import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { postEntrepreneurRegistration } from '../../data/data';
import { AuthContext } from '../Context/AuthContext';
import { UserContext } from '../Context/UserContext';


//NOTE: 'Duplicated id' error
const FormRegister = () => {
    const { push } = useHistory()
    const { setEntrepreneur } = useContext(UserContext)
    const { setCurrentUser } = useContext(AuthContext)
    

    const [ values, setValues ] = useState({
        name : '',
        email : '',
        password :'',
        repeatPassword:'',
    })

    const handleChange = (e) => {
        e.preventDefault();
        return setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.password !== values.repeatPassword) {
            alert('Las contraseñas ingresadas no coinciden')
            return
        }
        postEntrepreneurRegistration(values)
            .then((res)=>{
                console.log(res)
                setCurrentUser(values.email)
                console.log(values.email)
                setEntrepreneur(true)
                push('/emprendedor/welcome')
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return<>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="name" 
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name='email' value={values.email}
                    onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name='password' value={values.password}
                    onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control type="password" name='repeatPassword' value={values.repeatPassword} onChange={handleChange}
                />
            </Form.Group>

            <div className="position-btn">
                <Button className="btn-ingreso" type="submit">
                    Registro
                </Button>
            </div>
        </Form>
    </>
}

export default FormRegister;