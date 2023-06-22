import { useEffect } from 'react';
import './App.css';
import { ShowGithubUser } from './ShowGithubUser'
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
// useEffect(()=>{
//   fetch('https://api.github.com/users/Francesco-Cittadino')
//   .then((el)=>el.json())
//   .then((el)=>console.log(el))

// },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Link to='users/Francesco-Cittadino'>Nome</Link>} />
        <Route path='/users/:username' element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
