import { useEffect, useState } from "react";
function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue)
   
    function handleIncrement() {
        setCounter((c) => c + 1)
    }
    function handleDecrement() {
        setCounter((c) => c - 1)
    }
    function handleReset() {
        setCounter(initialValue)
    }
    return{
        counter:counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset,
    }

}
export function Counter({initialValue = 0}) {
    const {counter, onDecrement, onIncrement, onReset} = useCounter(initialValue)
 

    return (
        <div>
        <h1>
            Count: {counter}
        </h1>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>reset</button>
       
        </div>
    );
    }

