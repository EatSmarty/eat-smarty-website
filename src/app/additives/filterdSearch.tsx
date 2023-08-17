import React, { useState } from "react";
import Search from "./search";
import clsx from "clsx";

export default function FilterdSearch({ additives }) {
    const [searchField, setSearchField] = useState("");

    const filteredAdditives = additives.filter(
        additive => {
            return (
                additive.name.toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                additive.eNumber.toLowerCase()
                    .includes(searchField.toLowerCase())
            )
        }
    )

    const handleChange = e => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return (
            <Search filteredAdditives={filteredAdditives} />
        )
    }

    return (
        <div className="App mt-20">
            <div className="search-text">Search:</div>
            <input className={clsx(

            )} onChange={handleChange} />

            <div>
                {searchList()}
            </div>
        </div>
    );
}

