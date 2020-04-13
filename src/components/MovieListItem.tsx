import React from 'react';
import { Link } from "react-router-dom";

import "../style/ListItem.css"

import star from "../img/star.png"

import noimage from "../img/noimage.png"






const MovieListItem = ({ id, movie }) => {

    return (

        <div className="card">
            {movie.poster_path ?
                <div className="poster"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                /></div> : <div className="poster"><img src={noimage} /></div>}
            <div className="details">

                {movie.release_date ?
                    <h2>{movie.title}<br /><span>{movie.release_date}</span></h2>
                    : <h2>{movie.title}<br /><span>Release date not available</span></h2>}
                <div className="rating">
                    {movie.vote_average ?
                        <span>{movie.vote_average} <img src={star} width="10px" /></span>
                        : <span>N/A <img src={star} width="10px" /></span>
                    }
                </div>

                <div className="tags">
                    <span className="fantasy">{movie.original_language}</span>

                </div>

                <div className="info">
                    {movie.overview ?
                        <p>{movie.overview.slice(0, 70)}...</p>
                        : <p>No overview found....</p>}
                </div>

                <div className="star">
                    <Link to={`/movies/${id}`}><h4>Read more</h4></Link>

                </div>
            </div>
        </div>

    );
};

export default MovieListItem;