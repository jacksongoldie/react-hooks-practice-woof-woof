import { useEffect, useState } from 'react';
import Header from "./Header";
import Doggo from "./Doggo";

function App() {

  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [])

  function changeSelectedDog(id){
    const filteredDog = dogs.find((d) => d.id === id)
    setSelectedDog(filteredDog)
  }

  function onUpdateDog(dogObject){
    const updatedDogs = dogs.map((dog) => {
      if(dog.id === dogObject.id){
        return dogObject
      }
      else{
        return dog
      }
    })
    setSelectedDog(dogObject)
    setDogs(updatedDogs)
  }
  
  return (
    <div className="App">
      <Header dogs={dogs} changeSelectedDog={changeSelectedDog} />
      <Doggo selectedDog={selectedDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
