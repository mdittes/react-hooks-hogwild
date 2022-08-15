import {useState} from "react";
import HogTile from "./HogTile"

function HogContainer( {hogs} ) {
    const [someHogs, setSomeHogs] = useState(hogs)
    const [filterByGreased, setFilterByGreased] = useState(false);
    const [sortedByName, setSortedByName] = useState(false);
    const [sortedByWeight, setSortedByWeight] = useState(false);

    function handleFilter(e) {
        setFilterByGreased(!filterByGreased)

        if (e.target.checked) {
            const hogsFiltered = someHogs.filter(hog => {
                return hog.greased === true
        })
        setSomeHogs(hogsFiltered)
        } else {
            setSomeHogs(hogs)
        }
    };

    function handleNameSort(e) {
        setSortedByName(!sortedByName)

        if (e.target.checked) {
            let sortedHogs = someHogs.slice().sort( (a,b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
            })
            setSomeHogs(sortedHogs)
        } else {
            setSomeHogs(hogs)
        }
    };

    function handleWeightSort(e) {
        setSortedByWeight(!sortedByWeight)

        if (e.target.checked) {
            let sortedWeightHogs = someHogs.slice().sort( (a,b) => {
                if(a.weight < b.weight) return -1
                if(a.weight > b.weight) return 1
                return 0
            })
            setSomeHogs(sortedWeightHogs)
        } else {
            setSomeHogs(hogs)
        }
    };

    return (
        <div>
            <div>
                Only greased: <input 
                    onClick={handleFilter}
                    type="checkbox" 
                    id="filter">
                </input>
            </div>
            <div>
                Sort by name: <input 
                    onClick={handleNameSort}
                    type="checkbox" 
                    id="sort-name">
                </input>
            </div>
            <div>
                Sort by weight: <input 
                    onClick={handleWeightSort}
                    type="checkbox" 
                    id="sort-weight">
                </input>
            </div>
            {someHogs.map(hog => <HogTile hog={hog}/>)}
        </div>
    )
}

export default HogContainer;