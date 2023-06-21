import './App.css';
import { useState } from 'react';
import { FilteredList } from './FilteredList'


function App() {

  const [list, setList] = useState([
    { id: 1, name: 'Francesco', age: 30 },
    { id: 3, name: 'Vittorio', age: 30 },
    { id: 4, name: 'Giuseppe', age: 30 },
    { id: 5, name: 'Giuseppe', age: 20 },
    { id: 2, name: 'Matteo', age: 30 }
  ]);
 
  return (
    <header className="App-header">
      <div className="App">
        {/* <HookCounter initialValue={54} /> */}
        <FilteredList list={list} />
      </div>
    </header>
  );
}

export default App;
