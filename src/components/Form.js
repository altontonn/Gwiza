import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import contact from "../css_modules/contact.module.css";

function FormGroup() {
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

export default FormGroup;
