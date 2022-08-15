import {useState} from "react";
import HogDetails from "./HogDetails";

function HogTile( {hog} ) {
    const [showDetails, setShowDetails] = useState(false);

    function handleClick() {
        setShowDetails(!showDetails)
    };

    return (
        <div className="ui eight wide column">
            <h1>{hog.name}</h1>
            <img src={hog.image} 
                alt="{hog.name} the pig" 
                height="200"
                width="200"
                onClick={handleClick}
            />
            {showDetails ? <HogDetails hog={hog}/> : ""}
        </div>
    )
}

export default HogTile;