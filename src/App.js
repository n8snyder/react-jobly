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
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Function for logging in
  async function logIn(userCredentials) {
    const newToken = await JoblyApi.logIn(userCredentials);
    JoblyApi.token = newToken;
    setToken(newToken);

  }

  // Function for creating new account
  async function signUp(userData) {
    const newToken = await JoblyApi.signUp(userData);
    JoblyApi.token = newToken;
    setToken(newToken);
  }

  //Function for updating user profile
  async function updateUser(userData) {
    const updatedUserData = await JoblyApi.updateUser(userData);
    setUser(updatedUserData);
  }

  // Function for logging current user out
  function logOut() {
    setUser(null);
    setToken(null);
  }

  useEffect(function fetchUserWhenTokenChange() {
    async function fetchUser() {
      const { username } = jwt_decode(token);
      const userData = await JoblyApi.getCurrentUser(username);
      setUser(userData);
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
