function Doggo({ selectedDog, onUpdateDog }){

    const { id, name, isGoodDog, image } = selectedDog;

    function handleIsGoodDog(id){
        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isGoodDog: !isGoodDog})
        })
        .then(r => r.json())
        .then((dog) => onUpdateDog(dog))
    }

    return(
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            {selectedDog.id ? 
            <div id="dog-info">
                <img src={image} alt="dog pic" />
                <h2>{name}</h2>
                {isGoodDog ? 
                <button onClick={() =>handleIsGoodDog(id)}>Bad Dog!</button> :
                <button onClick={() =>handleIsGoodDog(id)}  >Good Dog :)</button>}
            </div>
            : null }
        </div>
    )
}

export default Doggo;