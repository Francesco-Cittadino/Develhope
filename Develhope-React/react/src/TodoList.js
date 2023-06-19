import React from "react";

class TodoList extends React.Component {
   constructor(props){
    super(props);
       this.state = {
           user: ["uno", "due"],
           val: "",
           disable: false,
        }
    }
        
    handleChange = (event) => {;
        const value = event.target.value;
        this.setState({
            val: value,
        })
    }

    handleGen = (event) => {
        const value = event.target.value;
        this.setState({
            user: [...this.state.user, this.state.val],
            // disable: true,
            val: "",
        })
    }

    handleRes = (event) => {
        const id = event.target.id;
        this.setState({
            user: this.state.user.filter((el) =>
                el !== id
            ),
        })
    }

    render() {
        return (
            <div>
                <input name="in"
                    type="text"
                    // disabled={this.state.disable}
                    onChange={this.handleChange}
                    value={this.state.val} />
                <input name="genera"
                    type="submit"
                    onClick={this.handleGen}
                    value="add" />
                <ul>
                    {this.state.user.map((el, index) => (
                        <li key={index}>
                            {el}
                            <input id={el}
                                name="remove" 
                                type="button"
                                onClick={this.handleRes}
                                value="remove" />
                        </li>)
                    )}
                </ul>

            </div>
        )
    }
}
export default TodoList