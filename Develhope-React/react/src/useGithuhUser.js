import { useState } from "react";
import useSWR, { mutate } from 'swr'

const fetcher = url=>fetch(url).then((el)=>el.json())

export function useGithubUser(username) {
    const {data, error} = useSWR( username ? `https://api.github.com/users/${username}`:null, fetcher)
    function fetchGithubUser(){
        mutate()
    }
    return{data, error, loading:!data && !error, onFetchUser:fetchGithubUser};
    
    // const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // function fetchGithubUser(username) {
    //     setLoading(true)
    //     setError(null)
    //     try {
    //         const response =  fetch(`https://api.github.com/users/${username}`);
    //         const json =  response.json();
    //         if (response.status !== 200) {
    //             setError(new Error())
    //         }
    //         setData(json.name)
    //     } catch (error) {
    //         setError(error)
    //         setData(null)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // return { data, error, loading, onFetchUser: fetchGithubUser }
}