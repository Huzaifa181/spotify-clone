import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon/>
                <input
                placeholder="Search for Artist,Songs"
                type="text" />
            </div>
            <div className="header__right">
                <Avatar/>
            </div>
        </div>
    );
}

export default Header;
