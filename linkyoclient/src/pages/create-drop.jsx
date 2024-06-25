import Header from "../components/header";
import './css/create-drop.css';
import { importAll } from "../components/js/import-data";
import DropCard from "../components/drop-card";

/**
 * A dummy api response for rendering drop card component.
 */
const dummyDrop = {
    "id" : 3,
    "name" : "CoCA",
    "publisher" : "Alok",
    "is_publisher_verified" : "n",
    "description" : "The world's first MPC wallet with non-custodial card.",
    "thumbnail_url" : "Framethumbnail-coca.png",
    "product_url" : "",
    "score" : "130",
    "tags" : [
        "Fintech",
        "Finance",
        "Blockchain"
    ]
};

/**
 * A react component that renders the create drop page.
 * @returns {ReactNode}
 */
const CreateDrop = () => {
    /**
     * Contains all svgs from assets/svgs/ folder
     */
    const svgs = importAll(require.context('../assets/svgs/', false, /.(png|jpe?g|svg)$/));

    return (
        <div id="create-drop-container">
            <Header />
            <div id="create-drop-content">
                <p id="create-drop-tagline-1">Drop Your Product and reach out to Millions.</p>
                <p id="create-drop-tagline-2">
                    Step into the spotlight and unveil your ingenious creation to the world!  Whether you've stumbled upon a game-changing gadget or crafted a product with your own hands, it's time to let the universe know. 
                    This is your moment to shine, to share your brilliance with eager minds and curious souls. <br /><br />
                </p>
                <form action="" method="" id="create-drop-form">
                    <div id="create-drop-subform-1-container">
                        <div id="create-drop-subform-1">
                            <input type="text" name="productInitialUrl" id="create-drop-subform-1-input" placeholder="Enter Product URL if any" />
                            <button id="create-drop-subform-1-get-started-button">Get Started</button>
                        </div>
                    </div>
                    <div id="create-drop-form-main-display-container">
                        <div id="create-drop-form-main-form-display">
                            <div id="create-drop-form-main-form-display-header">
                                <span>Editor</span>
                            </div>
                            <hr />
                            <div id="create-drop-form-main-form-display-body">
                                <span id="create-drop-form-main-form-display-body-sections">
                                    <span className="active">1. About <span><img src={svgs["check-circle-active.svg"]} alt="active indicator" /></span> </span>
                                    <span className="">2. About <span><img src={svgs["check-circle-inactive.svg"]} alt="inactive indicator" /></span> </span>
                                    <span className="">3. About <span><img src={svgs["check-circle-inactive.svg"]} alt="inactive indicator" /></span> </span>
                                    <span className="">4. About <span><img src={svgs["check-circle-inactive.svg"]} alt="inactive indicator" /></span> </span>
                                </span>
                                <p id="create-drop-form-main-form-display-body-text">
                                    Step into the spotlight and unveil your ingenious creation to the world!  Whether you've stumbled upon a game-changing gadget or crafted a product with your own hands, it's time to let the universe know. 
                                    This is your moment to shine, to share your brilliance with eager minds and curious souls. <br /><br />
                                </p>
                                <div id="create-drop-form-subform-2" className="create-drop-form-subforms">
                                    <div className="create-drop-form-input-fields-container">
                                        <label htmlFor="productUrl" className="create-drop-form-input-field-labels">URL</label>
                                        <input type="text" name="productUrl" id="" placeholder="Enter Product URL if any" className="create-drop-form-text-inputs" />
                                    </div>
                                    <div className="create-drop-form-input-fields-container">
                                        <label htmlFor="productName" className="create-drop-form-input-field-labels">Name of the Product</label>
                                        <input type="text" name="productName" id="" placeholder="Enter Name" className="create-drop-form-text-inputs" />
                                    </div>
                                    <div className="create-drop-form-input-fields-container">
                                        <label htmlFor="productDescription" className="create-drop-form-input-field-labels">Description</label>
                                        <textarea name="productDesctiption" id="" rows="6" placeholder="Describe your product" className="create-drop-form-textarea-inputs"></textarea>
                                    </div>
                                    <div className="create-drop-form-input-fields-container">
                                        <span className="create-drop-form-input-field-labels">Add Thumbnail</span>
                                        <label className="create-drop-form-file-input-containers">
                                            <input type="text" name="productThumbnail" className="create-drop-form-file-inputs" id="" placeholder="Select Image file to upload" />
                                            <img src={svgs["solar-upload-linear.svg"]} alt="upload icon" />
                                            <span>Select Image file to upload</span>                                            
                                        </label>
                                    </div>
                                    <div className="create-drop-form-navigation-buttons-container">
                                        <button className="create-drop-form-navigation-next-subform-buttons">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="create-drop-form-preview-display-container">
                            <div id="create-drop-form-preview-header">
                                <span id="create-drop-form-preview-text">Preview</span>
                                <button type="submit" id="create-drop-form-submit-button">Drop!</button>
                            </div>
                            <hr />
                            <div id="create-drop-form-preview-body">
                                <DropCard drop={dummyDrop} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateDrop;