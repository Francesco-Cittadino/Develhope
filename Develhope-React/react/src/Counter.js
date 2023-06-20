import { useEffect, useState } from "react";

function Counter(onCounterChange) {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("I Have mounted");
        return()=>{
            console.log("I am about to be unmounted");
        }
      }, []);

    function handleIncrement() {
        setCounter(counter + 1)
    }

    return (
        <div>
        <h1>
            Count: {counter}
        </h1>
        <button onClick={handleIncrement}>increment</button>
        </div>
    );

}
export default Counter


