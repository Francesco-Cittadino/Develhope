import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Francesco Cittadino" />
        <Counter initialValue={0} incValue={1} intervalValue={1000}/>
      </header>
    </div>
  );
}

export default App;
