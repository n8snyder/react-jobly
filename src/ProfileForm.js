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
}