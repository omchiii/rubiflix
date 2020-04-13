import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "../style/Detail.css"


import star from "../img/star.png"


const ShowDetail = (props) => {
    const [showDetail, setShowDetail] = useState({
        name: "",
        poster_path: "",
        tagline: "",
        first_air_date: "",
        overview: "",
        original_language: "",
        original_name: "",
        status: "",
        vote_average: "",
        homepage: "",
        type: ""
    });


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/tv/${props.match.params.id}?api_key=82b0d114d3fb9790768a610b2603b527&language=en-US`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setShowDetail(data)
            });
        props.handleUrl("/detail");

    }, []);

    return (
        <div>
            <Link to="/shows"><h1 style={{ textDecoration: "underline" }}>Back</h1></Link>
            <div className="containers">
                <div className="column">

                    {showDetail.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w300${showDetail.poster_path}`}
                        /> : ""}
                </div>
                <div className="column features">
                    {showDetail.first_air_date ?
                        <h1 className="white">{showDetail.name} ({showDetail.first_air_date.slice(0, 4)})</h1>
                        : <h1 className="white">{showDetail.name}</h1>}
                    {showDetail.vote_average ?
                        <p className="white"><img src={star} width="15px" />{showDetail.vote_average}</p>
                        : ""}
                    {showDetail.overview ?
                        <h4 className="white">{showDetail.overview}</h4>
                        : ""}
                    {showDetail.original_language ?
                        <p className="infos par white left"><span className="stars">Language:</span> {showDetail.original_language}</p>
                        : ""}
                    {showDetail.original_name ?
                        <p className="par white left"><span className="stars">Original Name:</span> {showDetail.original_name}</p>
                        : ""}
                    {showDetail.status ?
                        <p className="par white left"><span className="stars">Status:</span> {showDetail.status}</p>
                        : ""}
                    {showDetail.type ?
                        <p className="par white left"><span className="stars">Type:</span> {showDetail.type}</p>
                        : ""}
                    {showDetail.homepage ? <div className="star">
                        <a href={showDetail.homepage} target="_blank"><h4 className="pd40">Official Website</h4></a>

                    </div> : ""}

                </div>
            </div>
        </div>
    );
};

export default ShowDetail;