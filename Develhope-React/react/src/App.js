import './App.css';
import { HookCounter } from './HookCounter'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/HookCounter" element={<HookCounter />} />
      </Routes>

    </div>
  );
}

export default App;
