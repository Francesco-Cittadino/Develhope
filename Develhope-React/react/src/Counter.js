import React from "react";

class Counter extends React.Component {
    state = { count: 0}

    handleIncrement = ()=>{
        this.setState((state)=>{
            return{                
                count: this.state.count + 1
            }
        })
    }

    render() {
        return (
            <>
                <h1>
                    Count: {this.state.count}
                </h1>
                <button onClick={this.handleIncrement}>increment</button>
            </>
        );
    }
}
export default Counter


