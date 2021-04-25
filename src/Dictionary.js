import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleSearch);
    }

    function handleSearch(response) {
        setResults(response.data[0]);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary text-center">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword} className="searchBox mb-5" />
            </form>
            <Results results={results} />
        </div>
    );
}

//component property value