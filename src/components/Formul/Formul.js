import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formul.scss'

export const Formul= ()=> {
  
  return (
    <Form className='formulario'>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label className='label'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Adress">
        <Form.Label className='label'>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Adress" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

