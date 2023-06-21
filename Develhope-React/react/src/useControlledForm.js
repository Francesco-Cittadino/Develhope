import { useState } from "react";

export function useControlledForm(){
    const [data, setData] = useState({
        username:'',
        password:'',
    })

    function handleInput(event){
        const name = event.target.name;
        const value = event.target.value;
        setData((data)=>{
            return{
                ...data,
                [name]: value
            }
        })
    }

        function handleReset() {
            setData((data) => {
                return {
                    ...data,
                    username: '',
                    password: '',
                }
            })
        }
    
        return {data, onChangeValue: handleInput, onReset: handleReset}
    
    }


