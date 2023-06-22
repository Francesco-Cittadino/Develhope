import { useGithubUser } from "./useGithuhUser"

export function GithubUserForm ({ username }) {

    const {data, error, loading, onFetchUser } = useGithubUser(username)
    function handleGetUserData(){
        onFetchUser(username)
    }
    return(
        <div>
            <button onClick={handleGetUserData}>caricamento</button>
            {loading && <h1>in caricamento</h1>}
            {error && <h1>c'è stato un errore</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    )
}