import React from 'react';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        disabled: true,
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
        console.log(name, value)
    }


    render() {
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                {
                    this.state.username !== "" && this.state.password !== "" ?
                        <button onClick={this.handleLogin}>
                            Login
                        </button>
                        :
                        <button onClick={this.handleLogin} disabled={this.state.disabled}>
                            Login
                        </button>
                }
            </div>
        );
    }
}

export default Login;