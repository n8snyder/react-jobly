import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import JoblyNavBar from './JoblyNavBar';
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
 * App -> {JoblyNavBar, Routes}
 */


function App() {
  function getUser(){
    return (JSON.parse(localStorage.getItem("user")) || null);
  }
  const [user, setUser] = useState(getUser);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

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
    //Make sure to put ()
    if (token && (user === null)) {
      fetchUser();
    }
  }, [token, user]);



  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <JoblyNavBar logOut={logOut} />
          <Routes logIn={logIn} signUp={signUp} updateUser={updateUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
