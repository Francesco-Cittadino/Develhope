import { useEffect } from "react";

export function GithubUser(username) {
useEffect(
    (username)=>{
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((res) => console.log(res))

    },[]
)


    return (
        <div>

        </div>
    )
}