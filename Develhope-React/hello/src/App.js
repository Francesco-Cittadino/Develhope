import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Message from './message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Hello />
          <Message />
      </header>
    </div>
  );
}

export default App;
