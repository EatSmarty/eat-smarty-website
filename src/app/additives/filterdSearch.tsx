import React, { useState } from "react";
import Search from "./search";
import clsx from "clsx";
import Image from "next/image";

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
            <div className={clsx(
                "bg-gray-100",
                "rounded",
                "flex",
                "w-full"
            )}>
                <Image
                    height={30}
                    width={30}
                    src={'./svg/search.svg'}
                    alt="search"
                    className={clsx(
                        "p-1 ml-2"
                    )}
                />
                <input className={clsx(
                    "w-full",
                    "p-2.5",
                    "outline-none",
                    "bg-gray-100",
                    "inline"
                )}
                    placeholder="Search..."
                    onChange={handleChange} />
            </div>
            {searchList()}
        </div>
    );
}

