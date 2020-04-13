import React from 'react';
import { Link } from "react-router-dom";

import "../style/ListItem.css"

import star from "../img/star.png"

import noimage from "../img/noimage.png"





const ShowListItem = ({ show, id }) => {


    return (
        <div className="card">
            {show.poster_path ?
                <div className="poster"><img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                /></div> : <div className="poster"><img src={noimage} /></div>}

            <div className="details">
                {show.first_air_date ?
                    <h2>{show.name}<br /><span>{show.first_air_date}</span></h2> :
                    <h2>{show.name}<br /><span>Release date not available</span></h2>
                }

                <div className="rating">
                    {show.vote_average ?
                        <span>{show.vote_average} <img src={star} width="10px" /></span> :
                        <span>N/A <img src={star} width="10px" /></span>}
                </div>

                <div className="tags">
                    <span className="fantasy">{show.original_language}</span>

                </div>

                <div className="info">
                    {show.overview ?
                        <p>{show.overview.slice(0, 70)}...</p> :
                        <p>No overview found....</p>}
                </div>

                <div className="star">
                    <Link to={`/shows/${id}`}><h4>Read more</h4></Link>

                </div>
            </div>
        </div>

    );
};

export default ShowListItem;