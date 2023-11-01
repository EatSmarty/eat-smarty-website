import clsx from "clsx";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={clsx(
            "flex justify-center items-center flex-col h-screen",
        )}>
            <h1 className={clsx(
                "text-red-500",
            )}>Not found Product – 404!</h1>
            <div className={clsx(
                "text-white bg-green-500",
                "py-1 px-2 my-2",
                "rounded",
            )}>
                <Link href="/">Go back to Home</Link>
            </div>
        </div>
    );
}