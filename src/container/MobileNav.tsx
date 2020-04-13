import React from 'react';
import { DebounceInput } from 'react-debounce-input';


const MobileNav = ({ url, handleSubmit, inputValue, handleChange }) => {
    return (
        <div>
            {url == "/detail" ? "" :
                <div id="mobile-only">
                    <a id="filter">

                        <form onSubmit={handleSubmit}>
                            <DebounceInput
                                element="input"
                                type="search"
                                minLength={3}
                                value={inputValue}

                                debounceTimeout={1000}
                                placeholder="Search..."
                                onChange={handleChange} />
                            <i className="fa fa-search"></i>
                        </form>

                    </a>
                </div>
            }
        </div>
    );
};

export default MobileNav;