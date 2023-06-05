import React from "react";

class Counter extends React.Component {
    state = {count: 0}
    constructor(e) {
        super(e)
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }
    render() {
        return <h1>Counter : {this.state.count}</h1>
    }
}
export default Counter