import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Validation() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

return(
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Prénom / First Name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Prénom / First Name"
            
          />
          <Form.Control.Feedback type="invalid">
            Veuillez entrez un Prénom valide / Add a valid name.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Parfait! / Perfect!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Nom / Name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nom /Name"
            
          />
          <Form.Control.Feedback>Parfait!/ Perfect !</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Veuillez entrez un Prénom valide / Add a valide name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback>Parfait! /Perfect !</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un mail valide / Add a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Mot de passe /Password :</Form.Label>
          <Form.Control type="password" placeholder=">Mot de passe" required />
          <Form.Control.Feedback>Parfait! / Perfect</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Veuillez entrez un mot de passe valide / Add a valid password .
          </Form.Control.Feedback>
        </Form.Group>
        <h6>Choisir votre Legende / Choose your legend :</h6>
        <Form.Select aria-label="Default select example">
          
          <option value="1" default>Steven Gerrard</option>
          <option value="2">« Kenny » Mathieson Dalglish</option>
          <option value="3">Ian Rush</option>
          <option value="4">Jamie Carragher</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Indiquer la couleur du kit désirée / Indiquate the color of the kit </Form.Label>
        <Form.Control as="textarea" rows={3} defaultValue="Rouge ( Valeur par default)" />
      </Form.Group>

      
  
        
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Soummetre</Button>
  </Form>
 );
}

export default Validation;