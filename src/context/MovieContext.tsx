
import React, { useState, createContext, useEffect } from "react";



// @ts-ignore: Unreachable code error
export const MovieContext = createContext();
// @ts-ignore: Unreachable code error
export const MovieNewContext = createContext();




export const MovieProvider = (props) => {
    const [movies, setMovies] = useState<any[]>([])
    const [newMovies, setNewMovies] = useState<any[]>([])


    function fetchMovies() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=82b0d114d3fb9790768a610b2603b527&query=${props.value}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const list = data.results

                setNewMovies(list);
            });
    }

    useEffect(() => {
        setNewMovies(["loading"])
        if (props.value.length >= 3) {
            fetchMovies()
        }

    }, [props.value.length]);


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=82b0d114d3fb9790768a610b2603b527&language=en-US&page=1')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const list = data.results.slice(0, 10)
                setMovies(list);
            });

    }, []);



    return (

        <MovieNewContext.Provider value={[newMovies, setNewMovies]}>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </MovieNewContext.Provider>

    );

}