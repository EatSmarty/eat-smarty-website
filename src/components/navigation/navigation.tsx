import clsx from "clsx";
import Link from "next/link";
import Homeicon from "../svg/homicon";
import Additivesicon from "../svg/additivesicon";
import Scanicon from "../svg/scanicon";
import Settingicon from "../svg/settingicon";

export default function Navigation() {

    return (
        <nav className={clsx(
            "flex justify-between items-center",
            "md:justify-around",
            "overflow-hidden",
            "border-t",
            "w-full",
            "navigation-bottom",
        )}>
            <Link href={"/"} data-testid='naviagate-to-home'>
                <Homeicon />
            </Link>
            <Link href={"/additives"} data-testid='naviagate-to-additives'>
                <Additivesicon />
            </Link>
            <Link href={"/scan"} data-testid='naviagate-to-scan'>
                <Scanicon />
            </Link>
            <Link href={"/setting"} data-testid='naviagate-to-setting'>
                <Settingicon />
            </Link>

        </nav>
    );
}