import { useState } from "react";

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
  const initialFormData = { username: "", firstname: "", lastname: "", email: "" };
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
        <label htmlFor="ProfileForm-Username">Username</label>
        <input
          id="ProfileForm-Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        /> <br />
        <label htmlFor="ProfileForm-firstname">First name</label>
        <input
          id="ProfileForm-firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        /> <br />
        <label htmlFor="ProfileForm-lastname">Last name</label>
        <input
          id="ProfileForm-lastname"
          name="lastname"
          value={formData.lastname}
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProfileForm;