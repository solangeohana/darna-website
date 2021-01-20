import React, { useState } from 'react';
import { Form, Button, Container, FormGroup, Input, Label } from 'reactstrap';

const ContactScreen = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = event => {
    event.preventDefault();

    console.log('We will fill this up shortly.');
    // code to trigger Sending email
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <>
    <Container className='section'>
      <Form onSubmit={sendEmail}>
        <FormGroup controlId="name">
          <Label>Full Name</Label>
          <Input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </FormGroup>
        <FormGroup controlId="subject">
          <Label>Subject</Label>
          <Input
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </FormGroup>
        <FormGroup controlId="subject">
          <Label>Message</Label>
          <Input
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </>
  );
};

export default ContactScreen;