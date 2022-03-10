import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './NavBar';


/** App root component
 * 
 * App -> {NavBar, Routes}
 */

function App() {
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
