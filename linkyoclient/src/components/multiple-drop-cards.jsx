import './css/multiple-drop-cards.css';
//import drops from '../assets/testdrops'; // Mock api data - Initial version
import DropCard from './drop-card';
import { useEffect, useState } from 'react';
import axios from 'axios';

// console.log("Window Width: " + window.screen.width);
// console.log("Window Height: " + window.screen.height);
// console.log("Document Width: " + document.width);
// console.log("Document Height: " + document.height);

/**
 * A react component that renders a collection of Drops
 * @returns {ReactNode} A react element that renders a collection of Drops
 */
export default function MultipleDropCards() {

    const [drops, setDrops] = useState({});

    useEffect(()=>{
        const getRandomDrops = async ()=>{
            try{
                const res = await axios.get("drops/",{
                    headers:{
                        token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmJmNThlNjllMTNlYWIxOGMyMmExZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxODU0NTcxOCwiZXhwIjoxNzE4OTc3NzE4fQ.-W_BoN9yAhrq6eGnrwoFFsTv5Is3KqnK8ghc8ZRxzIk"
                    }
                });
                setDrops(res.data); 
            }catch(err){
                console.log(err)
            }
        };
        getRandomDrops();
    },[]);

    console.log(drops);
    return (
        <div className="drops-container">
            {
                drops && drops.length > 0 
                ? drops.map((drop) => <DropCard drop={drop} key={drop.id} /> ) 
                : <div>No data found</div>
            }
        </div>
    );
}