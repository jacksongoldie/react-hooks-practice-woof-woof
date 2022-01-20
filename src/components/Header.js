import FilterButton from "./FilterButton";
import DogNameContainer from "./DogNameContainer";
import { useState } from 'react';

function Header({ dogs, changeSelectedDog }){

    const [filter, setFilter] = useState(false)

    function onFilterChange(){
        setFilter((mUV) => !mUV)
    }

    return(
        <div>
            <FilterButton onFilterChange={onFilterChange} filter={filter} />
            <div>
                <DogNameContainer filter={filter} dogs={dogs} changeSelectedDog={changeSelectedDog} />
            </div>
        </div>
    )
}

export default Header;