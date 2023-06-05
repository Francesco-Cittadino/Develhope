import React from "react";

class Counter extends React.Component {
    state = {count : this.props.initialValue}
    constructor(e) {
        super(e)
        setInterval(() => {
            this.setState({count: this.state.count + this.props.incValue})
        }, this.props.intervalValue)
    }
    render() {
        return <h1>Counter : {this.state.count}</h1>
    }
}
export default Counter