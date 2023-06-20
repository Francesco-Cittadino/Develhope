import { useEffect } from "react";

export function GithubUserList(props) {

    return (
        <div>
            <ul>
                {props.lista.map((el, index) =>
                (<li key={index}> {el}</li>))}
            </ul>
        </div>
    )
}