import { useState } from "react";


/**Form to sign up new user
 * 
 * props:
 *  loginUser: function to login as user
 * 
 * state:
 *  formData: object of form field values
 * 
 */

function SignUpForm({ loginUser }) {
    const initialFormData = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: ""
    };
    const [formData, setFormData] = useState(initialFormData);

    function handleSubmit(evt) {
        evt.preventDefault();
        loginUser(formData);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <div className="SignUpForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="SignUpForm-Username">Username</label>
                <input
                    id="SignUpForm-Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                /> <br />
                <label htmlFor="SignUpForm-password">Password</label>
                <input
                    id="SignUpForm-password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                /> <br />
                <label htmlFor="SignUpForm-firstname">First name</label>
                <input
                    id="SignUpForm-firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                /> <br />
                <label htmlFor="SignUpForm-lastname">Last name</label>
                <input
                    id="SignUpForm-lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                /> <br />
                <label htmlFor="SignUpForm-email">Email</label>
                <input
                    id="SignUpForm-email"
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

export default SignUpForm;