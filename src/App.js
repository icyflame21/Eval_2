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
        <Route path="/registration/one" element={<Contact />}/>
        <Route path="/registration/two" element={<AboutUs />}/>
        <Route path="/users/details" element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
