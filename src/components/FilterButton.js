function FilterButton({ filter, onFilterChange }){
    return(
        <div>
                <div id="filter-div">
                    <button id="good-dog-filter" onClick={onFilterChange}>Filter good dogs: {filter ? "ON" : "OFF"}</button>
                </div>
        </div>
    )
}

export default FilterButton;