import {
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import {
  NavBar
} from './components/NavBar';
import {
  AboutUs
} from './pages/Two';
import {
  Contact
} from './pages/One';
import {
  Users
} from './pages/Users';
import {
  Login
} from './pages/Login';
import {
  Home
} from './pages/Home';
import {
  UserDetails
} from './pages/UserDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/registration/two" element={<AboutUs />}/>
        <Route path="/registration/one" element={<Contact />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users/:userId" element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
