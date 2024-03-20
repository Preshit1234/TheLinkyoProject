import './drop-card.css';
// import {DummyData} from '../assets/testdrops.js';

export default function DropCard() {
    // Function to import all images from a folder
    // Copied from https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    // Import images and svgs from assets folder
    const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));
    const svgs= importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));
    const dummyData = require('../assets/testdrops.js');
    console.log(dummyData);

    return (
        <div className="drop-card">
            {/* For names and tags */}
            <div className="grid-item grid-item-1">
                {/* For names */}
                <div className="drop-card-names">
                    <div><span className="drop-card-name">Grammarly</span></div>
                    <div>
                        <span className="drop-card-publisher">
                            <span>By</span> &nbsp;
                            <span>Sid Kan</span> &nbsp;
                            <img 
                                src={svgs['Vector-verification-tick.svg']} 
                                alt="Verification Tick" 
                                className="verification-tick" 
                            />
                        </span>
                    </div>
                </div>
                
                {/* For Tags */}
                <div className="drop-card-tags">
                    <span className="drop-card-tag">Writing</span>
                    <span className="drop-card-tag">EdTech</span>
                    <span className="drop-card-tag">Gen AI</span>
                    <span className="drop-card-tag">ML Modeling</span>
                </div>
            </div>

            {/* For thumbnail */}
            <div className="grid-item grid-item-2">
                <img src={images['Framethumbnail-grammarly.png']} alt="Drop Thumbnail" className="drop-card-thumbnail" />
            </div>

            {/* For description */}
            <div className="grid-item grid-item-3">
                <p>Instantly generate clear, complete writing while maintianing your unique voice.</p>
            </div>

            {/* For call to action buttons */}
            <div className="grid-item grid-item-4">
                <button className="drop-card-button-fetch-link">Fetch Link</button>
                <button className="drop-card-button-view-drop">View Drop</button>
            </div>

            {/* For ratings */}
            <div className="grid-item grid-item-5">
                <span className="drop-card-rating-description">
                    <span className="drop-card-rating-description-1">Linkyo</span> 
                    <span className="drop-card-rating-description-2">score</span>
                </span>
                <span className="drop-card-rating-number">150%</span>
            </div>
        </div>
    );
}