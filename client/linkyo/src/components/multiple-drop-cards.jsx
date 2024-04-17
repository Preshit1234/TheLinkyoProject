import './css/multiple-drop-cards.css';
import drops from '../assets/testdrops'; // Mock api data - Initial version
import DropCard from './drop-card';

// console.log("Window Width: " + window.screen.width);
// console.log("Window Height: " + window.screen.height);
// console.log("Document Width: " + document.width);
// console.log("Document Height: " + document.height);

/**
 * A react component that renders a collection of Drops
 * @returns {ReactNode} A react element that renders a collection of Drops
 */
export default function MultipleDropCards() {
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