import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formul.scss'
import { ColorRing } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';

export const Formul= ()=> {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
}, []);
  
  return (
    <div>
      {

        loading
            ?<div>
            <br/>
            <br/>
            <h2>Contacto</h2>
            <br/>
            <br/>
            <ColorRing height={250} width={250} />
            </div>
            : <div className='form_container'>
              <Form className='formulario'>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label className='label'>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='label'>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Adress">
                  <Form.Label className='label'>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Adress" />
                  <Form.Text className="text-muted"></Form.Text>
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
    </div>
      }
  </div>    
  );
}

