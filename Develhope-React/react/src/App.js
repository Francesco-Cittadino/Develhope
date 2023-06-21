import logo from './logo.svg';
import './App.css';
import InteractiveWelcome from './InteractiveWelcome ';
import {Counter} from "./Counter";
import ClickTracker from './ClickTracker';
import {Login} from './Login';
import UncontrolledLogin from './UncontrolledLogin'
import { LanguageContext } from './LanguageContext'
import TodoList from './TodoList'
import { useState } from 'react';
import { GithubUser } from './GithubUser';
import { GithubUserForm } from './GithubUserUno';
// import { DisplayLanguage } from './DisplayLanguage';


function App() {
  const [showCounter, setShowCounter] = useState(true);
  
  
  function handleShow (){
    setShowCounter( s => !s)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={handleShow}>toggleCounter</button>
        {showCounter && <Counter />}  
        <Counter />
        <GithubUserForm username='francesco-cittadino' />
        <Login />
      */}
        
        <GithubUser username="francesco-cittadino" />
      </header>
    </div>
  );
}

export default App;
