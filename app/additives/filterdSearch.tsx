import React, { useState } from "react";
import Search from "@/components/additives/search";
import clsx from "clsx";
import Searchinput from "@/components/additives/searchinput";

export default function FilterdSearch({ additives }) {
    const [searchField, setSearchField] = useState("");

    const filteredAdditives = additives.filter(
        (additive: { name: string; eNumber: string; }) => {
            return (
                additive.name.toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                additive.eNumber.toLowerCase()
                    .includes(searchField.toLowerCase())
            )
        }
    )

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return (
            <Search filteredAdditives={filteredAdditives} />
        )
    }

    return (
        <div className={clsx(
            "mt-20 w-full",
            "flex justify-center items-center flex-col",
        )}>

            <Searchinput handleChange={handleChange} />

            {searchList()}
        </div>
    );
}

