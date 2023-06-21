import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import { useState } from 'react';
import { GithubUser } from './GithubUser';
import { GithubUserForm } from './GithubUserUno';
// import { CarDetails } from './CarDetails'
import { DisplayLanguageFunc, LanguageContext } from './DisplayLanguageFunc';


function App() {

  const [language, setLanguage] = useState('en');

  function handleLanguageChange(event) {
    setLanguage(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguageFunc />
        </LanguageContext.Provider>
        {/* <GithubUser username="francesco-cittadino" /> */}
      </header>
    </div>
  );
}

export default App;
