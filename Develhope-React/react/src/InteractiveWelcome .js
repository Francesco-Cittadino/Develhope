import React from "react";
import Welcome from "./Welcome";
class InteractiveWelcome extends React.Component{
state = {
    value: ''
}
handleSet = (event)=>{
    this.setState(() => {
        const ev = event.target.value;
        return{
            value: ev    
        }
    })
}

    render(){
        return(
            <div>
                <input onChange={this.handleSet} value={this.state.value}></input>
                <Welcome name={this.state.value} />
            </div>
        )
    }
}
export default InteractiveWelcome