import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                <span className="fw-bold">
                    Similar:
                </span> <span> </span>
                {props.synonyms.map(function (synonym, index) {
                    return <li key={index}>  {synonym} </li>;
                })}
            </ul>
        );
    } else {
        return null;
    }
}