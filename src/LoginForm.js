import { useState } from "react";
import { 
  Button, 
  Card, 
  CardTitle, 
  Form, 
  FormGroup, 
  Input, 
  Label, 
  Col, 
  Alert
} from "reactstrap"


/** Form for logging in
 * 
 * Props:
 * - loginUser: function to log the user in
 * 
 * State:
 * - formData: object of form fields and values
 * - errors: array of errors that may occur in the form
 * 
 * Router -> LoginForm
 */

function LoginForm({ loginUser }) {
  const initialFormData = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await loginUser(formData);
    } catch (err) {
      setError(err[0]);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldForm => {
      return { ...oldForm, [name]: value }
    });
  }

  return (
    <div className="LoginForm">
      <Card className="p-4 m-4">
        <CardTitle className="pb-3" tag={"h2"}>Log in</CardTitle>
        {error && <Alert className="LoginForm-error" color="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label
              style={{maxWidth: "110px"}}
              className="px-3"
              for="LoginForm-username"
              sm={2}
            >
              Username
            </Label>
            <Col sm={8}>
              <Input
                className="px-3"
                required
                id="LoginForm-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label 
              for="LoginForm-password"
              style={{maxWidth: "110px"}}
              className="px-3"
              sm={2}
            >
              Password
            </Label>
            <Col sm={8}>
              <Input
                className="px-3"
                required
                id="LoginForm-password"
                name="password"
                value={formData.password}
                type="password"
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;