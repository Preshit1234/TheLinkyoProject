// Begin
import './css/browse-drops.css';
import MultipleDropCards from '../components/multiple-drop-cards.jsx';
import {useState} from "react";
import Header from '../components/header.jsx';
import {importAll} from '../components/js/import-data.js';
import { useEffect } from 'react';
import axios from 'axios';
import DropCard from '../components/drop-card';
import drops from '../assets/testdrops';

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
    
    const testDrop = {
        "id" : 1,
        "name" : "Grammarly",
        "publisher" : "Sid Kan",
        "is_publisher_verified" : "y",
        "description" : "Instantly generate clear, compelling writing while mentaining your unique voice.",
        "thumbnail_url" : "Framethumbnail-grammarly.png",
        "product_url" : "",
        "score" : "150",
        "tags" : [
            "Writing",
            "EdTech",
            "Gen AI",
            "ML Modeling"
        ]
    }; 
    let cpyCategoryTags = [...categoryTags];
    let svgs= importAll(require.context('../assets/svgs/', false, /\.(png|jpe?g|svg)$/));

        
    const [drops, setDrops] = useState({});

    useEffect(()=>{
        const getRandomDrops = async ()=>{
            try{
                const res = await axios.get("drops/66365cef95fe9aa17af89b07",{
                    headers:{
                        token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmJmNThlNjllMTNlYWIxOGMyMmExZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxODU0NTcxOCwiZXhwIjoxNzE4OTc3NzE4fQ.-W_BoN9yAhrq6eGnrwoFFsTv5Is3KqnK8ghc8ZRxzIk"
                    }
                });
                console.log(res);
                setDrops(res.data); 
            }catch(err){
                console.log(err)
            }
        };
        getRandomDrops();
    })

    return (
        <div>
            <Header />
            <div id="browse-drops-container">
                <div id="category-tags-container">
                    { cpyCategoryTags.map((ct) => (<div className="category-tags" key={ct.index}>{ct}</div>)) }
                </div>
                <div id="welcome-message-container">
                    <div id="welcome-textbox-1" className="welcome-textbox">
                        <span id="welcome-text-1">Welcome to Linkyo</span>
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
                        {[drops].map((drop) => (
                            <DropCard drop={drop} key={drop.id}/>
                        ))}
                    </div>
                    <div id="drops-type-2" className="drops-types">
                        <p className="drops-type-text">Products with high Linkyo Score</p>
                        <MultipleDropCards />
                    </div>
                </div>
            </div>
        </div>
    );
}