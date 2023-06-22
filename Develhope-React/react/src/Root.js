import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {GithubUserForm} from "./GithubUserUno";

export function Root() {
    return (
        <BrowserRouter>
            <header className="App-header">
                <App />
                <GithubUserForm />
            </header>
        </BrowserRouter>

    )
}