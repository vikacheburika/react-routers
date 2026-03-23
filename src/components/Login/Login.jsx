  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate() 

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="email" placeholder="Enter your login" />
        <Form.Text className="text-muted">
          Your nickname is beautiful
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={() => navigate("/")}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;