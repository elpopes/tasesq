import * as React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import logo from './logo.svg';

require("./App.css");


const App: React.FC = () => {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Home />
      </div>
    );
  };
  
  export default App;

