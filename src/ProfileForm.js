import { useContext, useState } from "react";
import UserContext from "./userContext";
import { Button, Col, Row, Form, FormGroup, Input, Label, Card, CardTitle } from "reactstrap";

/** Form for editing user details
 * 
 * Props:
 * - updateUser: function for updating the user detains
 * 
 * State:
 * - formData: object of form fields and values
 * 
 * Routes -> ProfileForm
 */

function ProfileForm({ updateUser }) {
  const userData = useContext(UserContext).user;
  const initialFormData = {
    username: userData?.username,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    email: userData?.email
  }
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(evt) {
    evt.preventDefault();
    updateUser(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div className="ProfileForm">
      <Card className="p-4 m-4">
        <CardTitle className="text-center pb-3" tag={"h1"}>Profile</CardTitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label
              style={{maxWidth: "110px"}}
              className="px-3"
              for="ProfileForm-username"
              sm={2}
              >
              Username
            </Label>
            <Col sm={8}>
              <Input
                className="px-3"
                id="ProfileForm-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                disabled
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              style={{maxWidth: "110px"}}
              className="px-3"
              for="ProfileForm-firstName"
              sm={2}
              >
              First name
            </Label>
            <Col sm={8}>
              <Input
                id="ProfileForm-firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              style={{maxWidth: "110px"}}
              className="px-3"
              for="ProfileForm-lastName"
              sm={2}
              >
              Last name
            </Label>
            <Col sm={8}>
              <Input
                id="ProfileForm-lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              style={{maxWidth: "110px"}}
              className="px-3"
              for="ProfileForm-email"
              sm={2}
              >
              Email
            </Label>
            <Col sm={8}>
              <Input
                id="ProfileForm-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                />
            </Col>
          </FormGroup>
          <Button color="primary">Save Changes</Button>
        </Form>
      </Card>
    </div>
  )
}

export default ProfileForm;