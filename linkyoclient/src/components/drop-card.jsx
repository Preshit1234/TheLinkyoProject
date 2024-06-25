import './css/drop-card.css';
import {importAll} from './js/import-data';

/**
 * A react component that renders a Drop
 * @param {Object{drop: object}} props Data is passed through custom attributes called props
 * @returns {ReactNode} A react element that renders a Drop
 */
export default function DropCard(props) {

    /**
     * All images with png, jpg and jpeg extensions from assets/images/ folder
     */
    const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));


    /**
     * All images with svg extensions from assets/svgs/ folder
     */
    const svgs= importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));


    const drop = props.drop;


    return (
        <div className="drop-card">

            {/* For names and tags */}
            <div className="grid-item grid-item-1">

                {/* For names */}
                <div className="drop-card-names">
                    <div><span className="drop-card-name">{drop.name}</span></div>
                    <div>
                        <span className="drop-card-publisher">
                            <span>By</span> &nbsp;
                            <span>{drop.publisher}</span> &nbsp;
                            {
                                drop.is_publisher_verified === "y" ?
                                <img 
                                    src={svgs['verification-tick.svg']} 
                                    alt="Verification Tick" 
                                    className="verification-tick" 
                                />
                                : ""
                            }
                        </span>
                    </div>
                </div>
                
                {/* For Tags */}
                <div className="drop-card-tags">
                    {
                        drop.tags && drop.tags.length > 0 ?
                        drop.tags.map((tag) => <span className="drop-card-tag" key={tag}>{tag}</span>)
                        : ""
                    }
                </div>

            </div>

            {/* For thumbnail */}
            <div className="grid-item grid-item-2">
                <img src={images[drop.thumbnail_url]} alt="Drop Thumbnail" className="drop-card-thumbnail" />
            </div>

            {/* For description */}
            <div className="grid-item grid-item-3">
                <p>{drop.description}</p>
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
                <span className="drop-card-rating-number">{drop.score}%</span>
            </div>
        </div>
    );
}