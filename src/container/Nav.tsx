import React from 'react';
import { Link } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';

import logo from "../img/logo.png"


const Nav = ({ url, handleSubmit, handleChange, inputValue }) => {
    return (
        <header className="header">
            <div className="wrapper">
                <a style={{ width: "21%" }} href="" className="logo"><img src={logo} height="70px" alt="" /></a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li className={url == "" ? "active" : ""}>
                        <Link to="/">TV Shows</Link>
                    </li>
                    <li className={url == "movies" ? "active" : ""}>
                        <Link to="/movies">Movies</Link>
                    </li>
                    {url == "/detail" ? "" :
                        <li id="searchbar">
                            <a id="filter">

                                <form action="" onSubmit={handleSubmit}>
                                    <DebounceInput
                                        element="input"
                                        type="search"
                                        value={inputValue}
                                        minLength={3}
                                        debounceTimeout={1000}
                                        placeholder="Search..."
                                        onChange={handleChange} />
                                    <i className="fa fa-search"></i>
                                </form>

                            </a>
                        </li>

                    }

                </ul>
            </div>
        </header>
    );
};

export default Nav;