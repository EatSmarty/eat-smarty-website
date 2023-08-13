import clsx from "clsx";


export default function Category() {
    return (
        <>
            <div className={clsx(
                "desc",
                "my-5",
                "text-left"
            )}>
                <span className={clsx(
                    "text-gray-500 ",
                    "mr-2"
                )}>Category</span>
                <span className={clsx(
                    "desc",
                    "text-xl text-"
                )}>Colours</span>
            </div>
        </>
    )
}