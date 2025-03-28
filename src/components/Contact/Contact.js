import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_nvhitng", // Replace with your EmailJS Service ID
          "template_pj8d4gg", // Replace with your EmailJS Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "8eW1O_72cIjzYZPFY" // Replace with your EmailJS Public Key
        )
        .then(
          () => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            alert("Failed to send message, please try again.");
            console.error("EmailJS Error:", error);
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="contact-container d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={8} lg={6} className="contact-box p-5 shadow-lg rounded">
          
          <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group controlId="formName">
              
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSubject" className="mt-3">
             
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
                placeholder="Enter subject"
              />
              <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
                placeholder="Write your message"
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="mt-4 px-4">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;