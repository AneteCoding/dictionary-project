import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleSearch);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSearch(response) {
        setResults(response.data[0]);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What are you looking for? </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeyword} defaultValue={props.defaultKeyword} />
                    </form>
                    <small>
                        Try also: coding, yoga, run...
                </small>
                </section>
                <Results results={results} />
            </div>
        );
    } else {
        load();


    }
}

