import logo from './logo.svg';
import './App.css';
import InteractiveWelcome from './InteractiveWelcome ';
import Counter from "./Counter";
import ClickTracker from './ClickTracker';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin'
import TodoList from './TodoList'
import { useState } from 'react';



function App() {
  const [lang, setLang] = useState('en');
  function handleLanguageChange(event){
    setLang({language: event.target.value})
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <div />
        {/* <InteractiveWelcome />
        <ClickTracker />
      <UncontrolledLogin /> */}
      <Login />
      <Counter />
        <select value={lang.language} onChange={handleLanguageChange}>
          <option>Italiano</option>
          <option>English</option>
        </select>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
