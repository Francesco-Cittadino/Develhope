import { GithubUserForm } from "./GithubUserUno";
import { useParams } from "react-router-dom";

export function ShowGithubUser(){
    const {username='Francesco-Cittadino'} = useParams()

    return(
        <div>
            <GithubUserForm username={username} />
        </div>
    )
}