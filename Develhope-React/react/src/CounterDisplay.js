import React from "react";
import Counter from "./Counter";

class CounterDisplay extends React.Component{
    render(){
        return(
            <h1>
                <Counter {...this.props} />
            </h1>
        )
    }
}
export default CounterDisplay