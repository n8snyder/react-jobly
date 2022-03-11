import { useState, useContext } from "react";
import UserContext from "./userContext";
import { Redirect } from "react-router-dom";

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
  const { user } = useContext(UserContext);

  //If logged in redirect to home page
  if(user){
    return (<Redirect to="/" />);
  }

  // handles form submission
  async function handleSubmit(evt) {
    evt.preventDefault();
    //TODO: include try and catch around await
    await loginUser(formData);
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