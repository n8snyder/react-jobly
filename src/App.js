import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import UserContext from "./userContext";
import { useEffect, useState } from 'react';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";



/** App root component
 * 
 * State:
 * - user: object of the logged in user
 * - token: string of authentication token used to make api calls
 * 
 * App -> {NavBar, Routes}
 */

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  console.log("Local Storage user:", localStorage.getItem("user"));
  console.log("Render App:", token, user);

  // Function for logging in
  async function logIn(userCredentials) {
    const newToken = await JoblyApi.logIn(userCredentials);
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  // Function for creating new account
  async function signUp(userData) {
    const newToken = await JoblyApi.signUp(userData);
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  //Function for updating user profile
  async function updateUser(userData) {
    const username = userData.username;
    const updateData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email
    }
    const updatedUserData = await JoblyApi.updateUser(updateData, username);
    setUser(updatedUserData);
  }

  // Function for logging current user out(token in JoblyApi need to be null too)
  function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  }

  useEffect(function fetchUserWhenTokenChange() {
    JoblyApi.token = token;
    async function fetchUser() {
      const { username } = jwt_decode(token);
      const userData = await JoblyApi.getCurrentUser(username);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
    if (token) {
      fetchUser();
    }
  }, [token]);



  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <NavBar logOut={logOut} />
          <Routes logIn={logIn} signUp={signUp} updateUser={updateUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
