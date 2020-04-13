import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";


import Nav from "./Nav";
import MobileNav from "./MobileNav";
import MoviesList from "./MoviesList";
import ShowsList from "./ShowsList";
import MovieDetail from "./MovieDetail";
import ShowDetail from "./ShowDetail";

import { MovieProvider } from "../context/MovieContext"

import { ShowProvider } from "../context/ShowContext"



import "../style/App.css"




const App = () => {
    const [inputValue, setInputValue] = useState("");

    const [url, setUrl] = useState("");


    const handleChange = (e) => {

        setInputValue(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault();

    }

    const handleURL = (url) => {
        setUrl(url)

    }

    return (

        <Router>
            <Nav url={url} handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue} />
            <div className="wrapper content">
                <MobileNav url={url} handleChange={handleChange} inputValue={inputValue} handleSubmit={handleSubmit} />
                <ShowProvider value={inputValue}>
                    <Route path="/" exact render={(props) => <ShowsList {...props} value={inputValue} handleUrl={handleURL} />} />
                    <Route path="/shows" exact render={(props) => <ShowsList {...props} value={inputValue} handleUrl={handleURL} />} />
                    <Route path="/shows/:id" exact render={(props) => <ShowDetail {...props} handleUrl={handleURL} />} />

                </ShowProvider>
                <MovieProvider value={inputValue}>
                    <Route path="/movies" exact render={(props) => <MoviesList {...props} value={inputValue} handleUrl={handleURL} />} />

                    <Route path="/movies/:id" exact render={(props) => <MovieDetail {...props} handleUrl={handleURL} />} />
                </MovieProvider>

            </div>

        </Router>

    );
}

export default App;