import React, { useState, createContext, useEffect } from "react";



// @ts-ignore: Unreachable code error
export const ShowContext = createContext();
// @ts-ignore: Unreachable code error
export const ShowNewContext = createContext();


export const ShowProvider = (props) => {
    const [shows, setShows] = useState<any[]>([])
    const [newShows, setNewShows] = useState<any[]>([])


    function fetchShows() {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=82b0d114d3fb9790768a610b2603b527&query=${props.value}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const list = data.results

                setNewShows(list);
            });
    }


    useEffect(() => {
        setNewShows(["loading"])
        if (props.value.length >= 3) {
            fetchShows()
        }

    }, [props.value.length]);



    useEffect(() => {

        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=82b0d114d3fb9790768a610b2603b527&language=en-US&page=1')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const list = data.results.slice(0, 10)
                setShows(list);
            });

    }, []);


    return (
        <ShowNewContext.Provider value={[newShows, setNewShows]}>
            <ShowContext.Provider value={[shows, setShows]}>
                {props.children}
            </ShowContext.Provider>
        </ShowNewContext.Provider>
    );

}