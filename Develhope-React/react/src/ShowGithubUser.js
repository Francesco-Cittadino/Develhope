import { GithubUser } from "./GithubUser";
import { useParams } from "react-router-dom";

export function ShowGithubUser(){
    // const {username='Francesco-Cittadino'} = useParams()

    return(
        <div>
            <GithubUser />
        </div>
    )
}