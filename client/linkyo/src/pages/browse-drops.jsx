// Begin
import './css/browse-drops.css';
import MultipleDropCards from '../components/multiple-drop-cards.jsx';
import {useState} from "react";
import Header from '../components/header.jsx';
import {importAll} from '../components/js/import-data.js';

const APP_NAME = process.env.REACT_APP_NAME;

// Mock API response data
const categoryTagsList = [
    "Writing",
    "EdTech",
    "Gen AI",
    "ML Modelling",
    "Writing",
    "EdTech",
    "Gen AI",
    "ML Modelling",
    "Writing",
    "EdTech",
    "Gen AI",
    "ML Modelling"
];

/**
 * A react component that renders the browse drops page.
 * @returns {ReactNode}
 */
export default function BrowseDrops () {
    const [categoryTags, setCategoryTags] = useState([]);

    // Initializing with mock data
    if(categoryTags.length < 1) {
        setCategoryTags(categoryTagsList);
    }
    
    let cpyCategoryTags = [...categoryTags];
    let svgs= importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div>
            <Header type="" />
            <div id="browse-drops-container">
                <div id="category-tags-container">
                    { cpyCategoryTags.map((ct, index) => (<div className="category-tags" key={index}>{ct}</div>)) }
                </div>
                <div id="welcome-message-container">
                    <div id="welcome-textbox-1" className="welcome-textbox">
                        <span id="welcome-text-1">Welcome to {APP_NAME}</span>
                        <span id="welcome-text-2">, Pratik!</span> &nbsp;
                        <img src={svgs["smiling-ghost-icon.svg"]} alt="smiling ghost icon" id="welcome-text-3" />
                    </div>
                    
                    <div id="welcome-textbox-2" className="welcome-textbox">
                        <span id="welcome-text-4">The place to promote high growth digital products.</span>
                    </div>    
                </div>
                <div id="drops-container">
                    <div id="drops-type-1" className="drops-types">
                        <p className="drops-type-text">Top products dropped recently</p>
                        <MultipleDropCards />
                    </div>
                    <div id="drops-type-2" className="drops-types">
                        <p className="drops-type-text">Products with high {APP_NAME} Score</p>
                        <MultipleDropCards />
                    </div>
                </div>
            </div>
        </div>
    );
}