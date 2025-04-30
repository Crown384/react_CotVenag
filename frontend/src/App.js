import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Button from './components/button';

function App() {

  const [name, setName] = useState("mICHAEL");
  // setName("MICH");
  return (
    <div className="App">
      <nav className="navBar">
        <p>Home</p>
        <p>Blog</p>
        <Button />
        <Button />
      </nav>
    </div>
  );
}

export default App;
