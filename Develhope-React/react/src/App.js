import logo from './logo.svg';
import './App.css';
import InteractiveWelcome from './InteractiveWelcome ';
import Counter from "./Counter";
import ClickTracker from './ClickTracker';
import Login from './Login';
// Modificare il componente Counter in modo 
// che l'intervallo venga inizializzato all'interno del metodo del ciclo di vita 
// componentDidMount anziché nel costruttore. 
// Il costruttore è ancora richiesto?
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InteractiveWelcome />
        <Counter />
        <ClickTracker/>
        <Login />
      </header>
    </div>
  );
}

export default App;
