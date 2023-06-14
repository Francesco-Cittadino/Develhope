import React from "react";

class UncontrolledLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.pass = React.createRef();
      }
    
      handleSubmit(event) {
        alert('il nome inserito è: ' + this.input.current.value);
        console.log('il nome inserito è: ' + this.input.current.value);
        console.log('la password inserita è: ' + this.pass.current.value);
        event.preventDefault();
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.input} />
                <input type="password" ref={this.pass} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default UncontrolledLogin