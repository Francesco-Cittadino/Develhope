import {  useControlledForm } from "./useControlledForm";


export function Login() {

    const {data, onChangeValue, onLog, onReset} = useControlledForm({username: '', password: ''})

    const isDisabled = !data.username || !data.password;
    return (
        <div>
            <div>
                <input type="text" name="username" value={data.username} onChange={onChangeValue}/>
                <input type="password" name="password" value={data.password} onChange={onChangeValue}/>
                <input type="button" name="login" value="login" disabled={isDisabled} onClick={onLog}/>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}