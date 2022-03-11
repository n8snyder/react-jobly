import { useState } from "react";


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
            <h2>Sign Up</h2>
            {error &&
                <p className="SignUpForm-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="SignUpForm-username">Username</label>
                <input
                    id="SignUpForm-username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /> <br />
                <label htmlFor="SignUpForm-password">Password</label>
                <input
                    id="SignUpForm-password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    required
                    minlength="5"
                /> <br />
                <label htmlFor="SignUpForm-firstname">First name</label>
                <input
                    id="SignUpForm-firstname"
                    name="firstName"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                /> <br />
                <label htmlFor="SignUpForm-lastname">Last name</label>
                <input
                    id="SignUpForm-lastname"
                    name="lastName"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                /> <br />
                <label htmlFor="SignUpForm-email">Email</label>
                <input
                    id="SignUpForm-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;