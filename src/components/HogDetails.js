

function HogDetails( {hog} ) {
    return (
        <div>
            <div>Specialty: {hog.specialty}</div>
            <div>{hog.greased ? "Greased" : "Not Greased"}</div>
            <div>Weight: {hog.weight}</div>
            <div>Highest medal achieved: {hog["highest medal achieved"]}</div>
        </div>
    )
}

export default HogDetails;