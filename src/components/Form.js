import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import contact from "../css_modules/contact.module.css";

export const FormGroup = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter email" className="inputField"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Password" className="inputField"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control as="textarea" placeholder="Message" className="inputField" rows={7} />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button className={contact.button} size="lg">
          SEND MESSAGE
        </Button>
      </div>
    </Form>
  );
}

export const PreFormGroup = () => {
  return (
    <Form className={contact.FormGroup}>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="text" placeholder="Your Name" className="inputField"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Your email" className="inputField"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Your Message" className="inputField"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control as="textarea" placeholder="Message" className="inputField" rows={7} />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button className={contact.preButton}>
          Contact Us
        </Button>
      </div>
    </Form>
  );
}
