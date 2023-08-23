import clsx from "clsx";
import Image from "next/image";
import searchIcon from '../../assets/svg/search.svg'

export default function Searchinput({ handleChange }) {

    return (
        <>
            <div className={clsx(
                "bg-gray-100",
                "flex justify-start items-stretch",
                "w-full",
                "py-2",
                "border-b-2 border-blue-600",
            )}>
                <Image
                    height={30}
                    width={30}
                    src={searchIcon}
                    alt="search"
                    className={clsx(
                        "p-1 ml-2"
                    )}
                />
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