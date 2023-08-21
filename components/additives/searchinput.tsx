import clsx from "clsx";


export default function Searchinput({ handleChange }) {

    return (
        <>
            <input className={clsx(
                "w-full",
                "bg-gray-100",
                "search-input",
            )}
                placeholder="Search..."
                onChange={handleChange} />
        </>
    )
}