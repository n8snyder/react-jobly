import { useState } from "react";

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

  // handles form submission
  async function handleSubmit(evt) {
    evt.preventDefault();
    //TODO: include try and catch around await
    try {
      await loginUser(formData);
    } catch (err) {
      setError(err[0]);
    }

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
      <h2>Log in</h2>
      {error &&
        <p className="LoginForm-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="LoginForm-username">Username</label>
        <input
          required
          id="LoginForm-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        /> <br />
        <label htmlFor="LoginForm-password">Password</label>
        <input
          required
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