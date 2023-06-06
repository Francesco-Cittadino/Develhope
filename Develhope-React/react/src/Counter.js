import React from "react";
import CounterDisplay from "./counterDisplay";

class Counter extends React.Component {
    state = { count: this.props.initialValue, }

    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + this.props.incValue })
        }, this.props.intervalValue)
    }
    static defaultProps = {
        initialValue: 0,
        incValue: 1,
        intervalValue: 1000,
    };
    render() {
        return (
            <>
                <CounterDisplay display={this.state.count} />
            </>
        );
    }
}
export default Counter


