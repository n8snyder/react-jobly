import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';
import UserContext from "./userContext";
import { useState } from 'react';
import JoblyApi from './api';



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

  async function signIn(userCredentials) {
    const newToken = await JoblyApi.signIn(userCredentials);
    setToken(newToken);
  }

  async function signUp(userData) {
    const newToken = await JoblyApi.signUp(userData);
    setToken(newToken);
  }

  async function update(userData) {
    const updatedUserData = await JoblyApi.updateUser(userData);
    setUser(updatedUserData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
