import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "../style/Detail.css"

import star from "../img/star.png"

import imdb from "../img/imdb.png"


const MovieDetail = (props) => {
    const [movieDetail, setMovieDetail] = useState({
        title: "",
        poster_path: "",
        tagline: "",
        release_date: "",
        overview: "",
        original_language: "",
        original_title: "",
        status: "",
        vote_average: "",
        imdb_id: ""
    });


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=82b0d114d3fb9790768a610b2603b527&language=en-US`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovieDetail(data)
            });
        props.handleUrl("/detail");
    }, []);

    return (
        <div>
            <Link to="/movies"><h1 style={{ textDecoration: "underline" }}>Back</h1></Link>
            <div className="containers">
                <div className="column">
                    {movieDetail.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}
                        /> : ""}
                </div>
                <div className="column features">
                    {movieDetail.title ?
                        <h1 className="white">{movieDetail.title} ({movieDetail.release_date.slice(0, 4)})</h1>
                        : ""}
                    {movieDetail.title ?
                        <p className="white"><img src={star} width="15px" />{movieDetail.vote_average}</p>
                        : ""}
                    {movieDetail.tagline ?
                        <p className="par"><i>"{movieDetail.tagline}"</i></p>
                        : ""}
                    {movieDetail.overview ?
                        <h4 className="white">{movieDetail.overview}</h4>
                        : ""}
                    {movieDetail.original_language ?
                        <p className="infos par white left"><span className="stars">Language:</span> {movieDetail.original_language}</p>
                        : ""}
                    {movieDetail.original_title ?
                        <p className="par white left"><span className="stars">Original Title:</span> {movieDetail.original_title}</p>
                        : ""}
                    {movieDetail.status ?
                        <p className="par white left"><span className="stars">Status:</span> {movieDetail.status}</p>
                        : ""}
                    {movieDetail.imdb_id ?
                        <div className="star">
                            <a href={`https://www.imdb.com/title/${movieDetail.imdb_id}/`} target="_blank"><h4 className="pd40" style={{ textDecoration: "none" }}>Find on <img className="imdb-logo" src={imdb} width="50px" alt="" /> >></h4></a>

                        </div>
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;