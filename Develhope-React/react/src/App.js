import './App.css';
import { useState } from 'react';
import {HookCounter} from './HookCounter'


function App() {

  const [language, setLanguage] = useState('en');

  function handleLanguageChange(event) {
    setLanguage(event.target.value)
  }
  return (
    <header className="App-header">
      <div className="App">
        <HookCounter initialValue={54} />
      </div>
    </header>
  );
}

export default App;
