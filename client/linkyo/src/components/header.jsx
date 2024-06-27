// Begin
import {importAll} from './js/import-data';
import './css/header.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

/**
 * A react component that renders the website header
 * @returns {ReactNode}
 */
export default function Header (props) {
    // Environment Variables
    const APP_NAME = process.env.REACT_APP_NAME;

    /**
     * A state variable to store the current type of the Header component
     * Values: logout, signingIn, loggingIn, login
     */
    const [type, setType] = useState(props.type);
    console.log(props);

    const svgs= importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));

    if(type === 'login') {
        return (
            <div className="header-container">

                {/* Left Hand Side */}
                <img src={ svgs['app-logo.svg'] } alt="App Logo" className="header-inline" id="app-logo-img" />
                <span className="header-inline" id="app-logo-text">{APP_NAME}</span>
                <Link to="" className="header-navigation-links header-inline" id="header-products-link">Products</Link>
                <Link to="" className="header-navigation-links header-inline" id="header-categories-link">Categories</Link>
                <Link to="" className="header-navigation-links header-inline" id="header-about-link">About</Link>
                <Link to="" className="header-navigation-links header-inline" id="header-analytics-link">Analytics</Link>
                
                {/* Center */}
                <form action="" className="header-inline" id="header-searchbar-form">
                    <input type="text" placeholder="Search Product, Category, genre, etc.." id="header-searchbar-input" />
                </form>

                {/* Right Hand Side */}
                <Link to="" className="header-inline" id="header-create-drop-button">Drop</Link>
                <img src={ svgs['notification-icon-active.svg'] } alt="active notification icon" className="header-inline" id="header-notification-button" />
                <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="user profile picture" className="header-inline" id="header-user-profile-pic" />
                
            </div>
        );
    } else if (type === 'logout') {
        return (
            <div className="header-container">

                {/* Left Hand Side */}
                <img src={ svgs['app-logo.svg'] } alt="App Logo" className="header-inline" id="app-logo-img" />
                <span className="header-inline" id="app-logo-text">{APP_NAME}</span>
                
                {/* Center */}

                {/* Right Hand Side */}
                <Link to="/browse/drops" className="header-inline" id="header-promote-drop-button">Promote Dropped Products</Link>
                <Link to="" className="header-inline" id="header-create-drop-button">Drop Product</Link>
                
            </div>
        );
    } else {
        return (
            <div className="header-container">

                {/* Left Hand Side */}
                <img src={ svgs['app-logo.svg'] } alt="App Logo" className="header-inline" id="app-logo-img" />
                <span className="header-inline" id="app-logo-text">{APP_NAME}</span>
                <Link to="" className="header-navigation-links header-inline" id="header-products-link">Products</Link>
                <Link to="" className="header-navigation-links header-inline" id="header-categories-link">Categories</Link>
                <Link to="" className="header-navigation-links header-inline" id="header-about-link">About</Link>
                <Link to="" className="header-navigation-links header-inline" id="header-analytics-link">Analytics</Link>
                
                {/* Center */}
                <form action="" className="header-inline" id="header-searchbar-form">
                    <input type="text" placeholder="Search Product, Category, genre, etc.." id="header-searchbar-input" />
                </form>

                {/* Right Hand Side */}
                <Link to="" className="header-inline" id="header-create-drop-button">Drop</Link>
                
            </div>
        );
    }
}