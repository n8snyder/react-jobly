import { useState } from "react";

/** Form for logging in
 * 
 * Props:
 * - loginUser: function to log the user in
 * 
 * State:
 * - formData: object of form fields and values
 * 
 * Router -> LoginForm
 */

function LoginForm({ loginUser }) {
  const initialFormData = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);

  // handles form submission
  function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(formData);
  }

  // update field value on change
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldForm => {
      return { ...oldForm, [name]: value }
    });
  }

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="LoginForm-username">Username</label>
        <input
          id="LoginForm-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        /> <br />
        <label htmlFor="LoginForm-password">Password</label>
        <input
          id="LoginForm-password"
          name="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
        /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;