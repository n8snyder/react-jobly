import { useState } from "react";
import { Form, Card, CardTitle, Label, Input, FormGroup, Col, Button, Alert } from "reactstrap";


/**Form to sign up new user
 * 
 * props:
 *  signUpUser: function to login as user
 * 
 * state:
 *  formData: object of form field values
 * 
 */

function SignUpForm({ signUpUser }) {

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
        await signUpUser(formData);
    } catch (err) {
        setError(err[0]);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div className="SignUpForm">
      <Card className="p-4 m-4">
        <CardTitle className="pb-3" tag={"h2"}>Sign up</CardTitle>
        {error && <Alert className="SignUpForm-error" color="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label 
              for="SignUpForm-username"
              style={{maxWidth: "110px"}}
              className="px-3"
              sm={2}
            >
              Username
            </Label>
            <Col sm={8}>
              <Input
                id="SignUpForm-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="px-3"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label 
              for="SignUpForm-password"
              style={{maxWidth: "110px"}}
              className="px-3"
              sm={2}
            >
              Password
            </Label>
            <Col sm={8}>
              <Input
                id="SignUpForm-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
                minlength="5"
                className="px-3"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label 
              for="SignUpForm-firstname"
              style={{maxWidth: "110px"}}
              className="px-3"
              sm={2}
            >
              First name
            </Label>
            <Col sm={8}>
              <Input
                id="SignUpForm-firstname"
                name="firstName"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="px-3"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label 
              for="SignUpForm-lastname"
              style={{maxWidth: "110px"}}
              className="px-3"
              sm={2}
            >
              Last name
            </Label>
            <Col sm={8}>
              <Input
                id="SignUpForm-lastname"
                name="lastName"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="px-3"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label 
              for="SignUpForm-email"
              style={{maxWidth: "110px"}}
              className="px-3"
              sm={2}
            >
              Email
            </Label>
            <Col sm={8}>
              <Input
                id="SignUpForm-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="px-3"
              />
            </Col>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </Card>
    </div>
  )
}

export default SignUpForm;