import {useState} from 'react';

function Login(props){
    const [data, setData] = useState({
        username: "",
        password: "",
        disabled: false,
    })
   
    function handleChange (event){
        const value = event.target.value;
        const name = event.target.name;
        setData({
            [name]: value,
        })
        console.log(name, value)
    }
   const handleReset = (data) => {
        setData({
            username: "",
            password: "",
        })
    }
   function handleLogin (data){
       alert("benvenuto ", data.username)
    }

        return (
            <div>
                <input name="username" type="text" value={data.username} onChange={handleChange} />
                <input name="password" type="password" value={data.password} onChange={handleChange} />
                {
                    data.username !== "" && data.password !== "" ?
                        <div>
                            <button onClick={handleLogin}>
                                Login
                            </button>
                            <button onClick={handleReset}>Reset</button>
                        </div>
                        :
                        <div>
                            <button onClick={handleLogin} disabled={data.disabled}>
                                Login
                            </button>
                            <button onClick={handleReset} disabled={data.disabled}>Reset</button>
                        </div>
                }
            </div>
        );
    
}

export default Login;