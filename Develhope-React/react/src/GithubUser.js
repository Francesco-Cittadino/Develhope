import { useState } from "react";
import { GithubUserList } from "./GithubUserList";

export function GithubUser() {
  // const [username, setUsername] = useState('');
  const [data, setData] = useState({
    username: '',
    arr: ['francescocittadino', 'pasquale']
  });

  function handleChange (event) {
    const value = event.target.value;
    setData((data)=>{
        return{
            ...data,
            username: value,
        }
    })
  }
 function handleGen (){
    setData((data) => {
      return {
        ...data,
        arr: [...data.arr, data.username],
      }
    })
  }

  return (
    <div>
      {/* <input value={username} onChange={(e)=>setUsername(e.target.value)} /> */}
      <input name="usernames" type="text" onChange={handleChange} value={data.username} />
      <button type="submit" onClick={handleGen}>Aggiungi</button>
      <GithubUserList lista={data.arr}/>
    </div>
  );
};