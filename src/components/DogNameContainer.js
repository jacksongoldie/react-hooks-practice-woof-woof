function DogNameContainer({ dogs, changeSelectedDog, filter }){

    const dogNames = dogs.map((d) => <span onClick={(e) =>changeSelectedDog(d.id)} key={d.id}>{d.name}</span>)

    const filteredDogs = dogs.filter((dog) => dog.isGoodDog === true)
    
    const displayFilteredDogs = filteredDogs.map((d) => <span onClick={(e) =>changeSelectedDog(d.id)} key={d.id}>{d.name}</span>)

    return(
        <div id="dog-bar">
           {filter ? displayFilteredDogs : dogNames} 
        </div>
    )
}

export default DogNameContainer;