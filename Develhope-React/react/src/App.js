import { useEffect } from 'react';
import './App.css';
import { ShowGithubUser } from './ShowGithubUser'
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { CounterUno } from "./CountUno";
import Welcome from "./Welcome";

function App() {
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Francesco-Cittadino')
  //   .then((el)=>el.json())
  //   .then((el)=>console.log(el))

  // },[])
  return (
    <div>
      <div>
        <div>
          <Link to='/'>home</Link>
        </div>
        <div>
          <Link to='/Counter'>Counter</Link>
        </div>
        <div>
          <Link to='/Welcome'>Welcome</Link>
        </div>
      </div>
      <Routes>
        <Route path='*' element={
          <div><Link to='/'>Indietro</Link>
            <p>
              Not Found
            </p>
          </div>} />
        <Route path='/' element={<CounterUno />} />
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/Counter' element={<CounterUno />} />
        <Route path='/users/:username' element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
