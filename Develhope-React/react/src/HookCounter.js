import {useCounter} from './useCounter';

export function HookCounter({ initialValue = 0 }){

        const {counter, onDecrement, onIncrement, onReset} = useCounter(initialValue)
     
        return (
            <div>
            <h1>Count: {counter}</h1>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>reset</button>
           
            </div>
        );
        }
    