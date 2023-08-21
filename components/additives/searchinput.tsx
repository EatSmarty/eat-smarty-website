import clsx from "clsx";


export default function Searchinput({ handleChange }) {

    return (

        <input className={clsx(
            "w-full",
            "p-2.5",
            "outline-none",
            "bg-gray-100",
            "inline"
        )}
            placeholder="Search..."
            onChange={handleChange} />
    )
}