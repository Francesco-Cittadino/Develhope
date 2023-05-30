import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

// Crea un componente della classe Welcome 
// che riceva un oggetto di scena per il nome e visualizzi Welcome, 
// {name}! messaggio all'interno di un tag p. 
// Rendi questo componente al tuo componente App, 
// passandogli un oggetto di nome a tua scelta.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
      </header>
    </div>
  );
}

export default App;
