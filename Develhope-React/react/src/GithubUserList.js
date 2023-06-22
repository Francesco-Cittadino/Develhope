import { useEffect } from "react";
import { Link } from "react-router-dom";

export function GithubUserList(props) {

    return (
        <div>
            <ul>
                {props.lista.map((el, index) =>
                (<li key={index}><Link to={`/users/${el}`}>{el}</Link></li>))}
            </ul>
        </div>
    )
}