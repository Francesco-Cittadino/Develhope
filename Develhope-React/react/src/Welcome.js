import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1 className="hOne">Welcome</h1>
                <p><strong>{this.props.name}</strong></p>
                <p><Age age={32} /> </p>
            </div>
        )
    }
}
export default Welcome;