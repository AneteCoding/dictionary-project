import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleSearch);

        let pexelsApiKey = `563492ad6f9170000100000107559caf3e754ee8b5cacaa040337516`;
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsUrl, { headers: headers }).then(handlePictures);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSearch(response) {
        setResults(response.data[0]);
    }

    function handlePictures(response) {
        setPhotos(response.data.photos)

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
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();


    }
}

