import React from "react";

class TodoList extends React.Component {
    state = {
        user: ["name", "uno", "tre", "name1", "name2", "name3"],
        ciao: "",
        disable: false,
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ciao: value,
        })
        console.log(value)
    }
    handleGen = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        this.setState({
            user: [...this.state.user, this.state.ciao],
            disable: true,
        })
        // console.log(this.state.user)
    }
    render() {
        return (
            <div>
                <input name="in" type="text" disabled={this.state.disable} onChange={this.handleChange} value={this.state.ciao} />
                <input name="genera" type="submit" onClick={this.handleGen} value="invia" />
                <ul>

                    {this.state.user.map((el, index) =>
                        (<li key={index}>{el}</li>)
                    )}
                </ul>

            </div>
        )
    }
}
export default TodoList