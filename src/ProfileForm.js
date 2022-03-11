import { useContext, useState } from "react";
import UserContext from "./userContext";

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
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ProfileForm-username">Username</label>
        <input
          id="ProfileForm-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled
        /> <br />
        <label htmlFor="ProfileForm-firstName">First name</label>
        <input
          id="ProfileForm-firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        /> <br />
        <label htmlFor="ProfileForm-lastName">Last name</label>
        <input
          id="ProfileForm-lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        /> <br />
        <label htmlFor="ProfileForm-email">Email</label>
        <input
          id="ProfileForm-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        /> <br />
        <button>Save Changes</button>
      </form>
    </div>
  )
}

export default ProfileForm;