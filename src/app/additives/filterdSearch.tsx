import React, { useState } from "react";
import Search from "./search";
import clsx from "clsx";
import Image from "next/image";

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
        <div className={clsx(
            "mt-20",
            "flex justify-center items-center flex-col"
        )}>
            <div className={clsx(
                "bg-gray-100",
                "flex",
                "rounded",
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
                    "p-2",
                    "outline-none",
                    "bg-gray-100",
                    "inline"
                )}
                    placeholder="Search..."
                    onChange={handleChange} />
            </div>

            <div>
                {searchList()}
            </div>
        </div>
    );
}

