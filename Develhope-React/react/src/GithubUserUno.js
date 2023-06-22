import { useGithubUser } from "./useGithuhUser"

export function GithubUserForm ({ username }) {
    const {data} = useGithubUser(username)
 

    return(
        <div>
             <h1 style={{color:'white'}}>{data}</h1>
        </div>
    )
}