import React, { useEffect, useContext } from 'react';

import MovieListItem from "../components/MovieListItem"

import { MovieContext } from "../context/MovieContext"

import { MovieNewContext } from "../context/MovieContext"


import loading from "../img/loading.svg"


const MoviesList = (props) => {

    const [initialMovies] = useContext(MovieContext)
    const [movies] = useContext(MovieNewContext)





    useEffect(() => {


        props.handleUrl("movies")

    }, []);



    const movieList = initialMovies.map(movie => <MovieListItem key={movie.id} id={movie.id} movie={movie} />)
    const movieSearchList = movies[0] !== "loading" ? movies.map(movie => <MovieListItem key={movie.id} id={movie.id} movie={movie} />) : <img src={loading} style={{ position: "absolute", margin: "0 auto" }} width="200px" alt="" />
    const valueLength = props.value.length


    return (


        <div>
            {valueLength >= 3 ? <h1>Results for "{props.value}"</h1> : <h1>Top 10 Rated Movies - <b>All time</b> </h1>}
            {movies.length == 0 && valueLength >= 3 ? <p style={{ color: "white" }}>No results found.</p> : ""}

            <div className="container">


                {valueLength >= 3 ? movieSearchList : movieList}

            </div>
        </div>

    );
};

export default MoviesList;