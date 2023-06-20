import {useState} from "react";

function Counter ({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrement (){
        setCounter(counter + 1)
  
    }

   
        return (
            <>
                <h1>
                    Count: {counter}
                </h1>
                <button onClick={handleIncrement}>increment</button>
            </>
        );
    
}
export default Counter


