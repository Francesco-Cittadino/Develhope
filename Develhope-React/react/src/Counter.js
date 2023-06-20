import { useEffect, useState } from "react";

function Counter(onCounterChange) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {onCounterChange(counter)}, [counter, onCounterChange]);

    function handleIncrement() {
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


