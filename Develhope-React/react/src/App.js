import logo from './logo.svg';
import './App.css';
import Age from './Age';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Age age={32} />
      </header>
    </div>
  );
}

export default App;
