// Begin
import {importAll} from './js/import-data';
import './css/header.css';
import {Link} from 'react-router-dom';

/**
 * A react component that renders the website header
 * @returns {ReactNode}
 */
export default function Header () {
    const svgs= importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));
    return (
        // <div className="header-container">
        //     <div className="header-navigations-wrapper">
        //         <a href="" id="header-homepage-link">
        //             <img src={ svgs['linkyo-logo.svg'] } alt="Linkyo Logo" id="linkyo-logo-img" />
        //             <span id="linkyo-logo-text">Linkyo</span>
        //         </a>
        //         <div className="header-navigation-links">
        //             <a href="" className="header-navigation-link">Products</a>
        //             <a href="" className="header-navigation-link">Categories</a>
        //             <a href="" className="header-navigation-link">About</a>
        //             <a href="" className="header-navigation-link">Analytics</a>
        //         </div>
        //     </div>
            
        //     <form action="" className="header-searchbar-wrapper">
        //         <input type="text" placeholder="Search Product, Category, genre, etc.." className="header-searchbar-input" />
        //     </form>

        //     <div className="header-accounts-wrapper">
        //         <a href="" className="create-drop-button">Drop</a>
        //         <img src={ svgs['notification-icon-active.svg'] } alt="active notification icon" className="notification-icon" />
        //         <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="user profile picture" className="user-profile-pic" />
        //     </div>
            
        // </div>

        <div className="header-container">

            {/* Left Hand Side */}
            <img src={ svgs['linkyo-logo.svg'] } alt="Linkyo Logo" className="header-inline" id="linkyo-logo-img" />
            <span className="header-inline" id="linkyo-logo-text">Linkyo</span>
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
}