import { Form, Button } from 'react-bootstrap';

const FormLogin = () => {
    return<>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o correo electrónico</Form.Label>
                <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Mantenme conectado" />
            </Form.Group>
            
            <div className="position-btn">
                <Button className="btn-ingreso" type="submit">
                    Iniciar Sesión
                </Button>
            </div>
        </Form>
    </>
}

export default FormLogin;