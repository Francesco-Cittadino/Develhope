import logo from './logo.svg';
import './App.css';
import InteractiveWelcome from './InteractiveWelcome ';
import Counter from "./Counter";
import ClickTracker from './ClickTracker';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin'
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div />
        {/* <InteractiveWelcome />
        <Counter />
        <ClickTracker/>
        <Login />
        <UncontrolledLogin /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
