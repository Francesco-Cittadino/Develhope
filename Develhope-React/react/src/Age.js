import React from "react";
import Welcome from "./Welcome";
class Age extends React.Component{
    render(){
        return(
        <div>
            <Welcome name="Francesco Cittadino" />
            <p>Your age is {this.props.age}</p>
        </div>
        )
    }

}
export default Age