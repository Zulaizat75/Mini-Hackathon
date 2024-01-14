import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Contacts.css";

function Contacts() {
  return (
    <div class="text"><h1>Get Touch with Us</h1>
    
    <Form>
    <div class="main"> 
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
    </InputGroup>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Which day available
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Weekday"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Weekend"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="All day"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">submit</Button>
        </Col>
      </Form.Group>
      </div>
    </Form>
 
    <h1 class="text">Follow Us </h1>
     <div class="icon">
     
                <i><img src="./twitter.png" alt="twiter image" width="30px"></img></i>
                <i><img src="./facebook.png" alt="fb image" width="30px"></img></i>
                <i><img src="./google-plus.png" alt="google image" width="30pxd"></img></i>
                <i><img src="./insta.jpg" alt="google image" width="30pxd"></img></i>
          

      </div>

  </div>
  );
}

export default Contacts