import React from 'react';
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DetailsTwoToneIcon from '@material-ui/icons/DetailsTwoTone';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
    return (
        <div className="container">
            <div  className="menu"><MenuIcon color="secondary"/></div>
            <div className="logo">
            <img alt="" src="https://astrokapoor.com/wp-content/uploads/2018/10/logo.png"/>
            </div>
            <div className="options">
                <p className="navtext">ABOUT US</p>
                <p className="navtext">SERVICES</p>
                <p className="navtext">PRODUCTS</p>
                <p className="navtext">BLOGS</p>
                <p className="navtext">CONTACT</p>
            </div>
            <div className="icons">
              <SearchIcon className="iconsearch"/>
              <PersonRoundedIcon className="iconview" />
              <FavoriteRoundedIcon className="iconview" />
              <img className="indicon" alt="" src="https://astrokapoor.com/wp-content/plugins/woo-multi-currency/images/flag/USD.png"/>
              <h3 className="indicon">INR</h3>
              <DetailsTwoToneIcon className="iconview" />
            </div>
        </div>
    )
}
