import clsx from "clsx";
import Image from "next/image";
import searchIcon from '../../assets/svg/search.svg'
import Searchicon from "../svg/searchicon";

export default function Searchinput({ handleChange }) {

    return (
        <>
            <div className={clsx(
                "bg-gray-100",
                "flex justify-start items-stretch",
                "w-4/5",
                "py-3 mt-5",
                "rounded",
                "md:w-2/5"
                // "border-b-2 border-blue-600",
            )}>
                <span className={clsx(
                    "mx-2"
                )}>
                    <Searchicon />
                </span>
                <input className={clsx(
                    "w-full",
                    "bg-gray-100",
                    "search-input",
                )}
                    placeholder="Search..."
                    onChange={handleChange} />

            </div>
        </>
    )
}