import React, { useState } from "react";
import additives from '../additives.json'
import AdditiveCart from "../additivecard/additivesCard";

export default function App() {
    const enumberList = additives.map((enumber) => {
        return enumber.eNumber
    });

    const [filteredList, setFilteredList] = useState(enumberList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...enumberList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    return (
        <div className="App">
            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            <div id="item-list">
                <ol>
                    {filteredList.map((index) => (
                        <p>{ }</p>
                    ))}
                </ol>
            </div>
        </div>
    );
}

