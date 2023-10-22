import clsx from "clsx";
import Searchicon from "../svg/searchicon";

export default function Searchinput({ handleChange, placeholder, keyDown }) {

    return (
        <>
            <div className={clsx(
                "bg-gray-100",
                "flex justify-start items-stretch",
                "w-4/5",
                "py-3 my-5",
                "rounded",
                "md:w-2/5",
            )}>
                <span className={clsx(
                    "mx-2",
                )}>
                    <Searchicon />
                </span>
                <input className={clsx(
                    "w-full",
                    "bg-gray-100",
                    "search-input",
                )}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onKeyDown={keyDown} />

            </div>
        </>
    );
}