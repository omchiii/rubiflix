import React, { useEffect, useContext } from 'react';

import ShowListItem from "../components/ShowListItem";

import { ShowContext } from "../context/ShowContext"
import { ShowNewContext } from "../context/ShowContext"




import loading from "../img/loading.svg"


const ShowsList = (props) => {
    const [initialShows] = useContext(ShowContext)
    const [shows] = useContext(ShowNewContext)




    useEffect(() => {


        props.handleUrl("");

    }, []);






    const showList = initialShows.map(show => <ShowListItem key={show.id} id={show.id} show={show} />)
    const showSearchList = shows[0] !== "loading" ? shows.map(show => <ShowListItem key={show.id} id={show.id} show={show} />) : <img src={loading} style={{ position: "absolute", margin: "0 auto" }} width="200px" alt="" />
    const valueLength = props.value.length



    return (
        <div>

            {valueLength >= 3 ? <h1>Results for "{props.value}"</h1> : <h1>Top 10 TV Shows - <b>All time</b> </h1>}
            {shows.length == 0 && valueLength >= 3 ? <p style={{ color: "white" }}>No results found.</p> : ""}
            <div className="container">


                {valueLength >= 3 ? showSearchList : showList}

            </div>
        </div>
    );
};

export default ShowsList;