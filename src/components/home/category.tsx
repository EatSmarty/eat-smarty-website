import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaBowlRice, FaFish } from "react-icons/fa6";
import { GiCannedFish, GiSlicedBread } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuBaby, LuCupSoda, LuMilk, LuVegan } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";

interface CategoryInterface {
    // productSrc: string;
    categoryIcon: IconType
}

export default function Category() {
    return (
        <div>
            <h2 className={clsx(
                'text-center',
                'font-semibold text-xl',
                'text-[#5F33E1]',
                'my-5'
            )}>Product</h2>
            <div className={clsx(
                'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ',
                'gap-5'
            )}>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <LuVegan size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <GiCannedFish size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <LuMilk size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <TbMeat size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <FaFish size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <LuBaby size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <IoFastFoodOutline size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <GiSlicedBread size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <LuCupSoda size={30} color="#5F33E1" />
                </Link>
                <Link href="" className={clsx(
                    'flex justify-center items-center',
                    'bg-[#FFF]',
                    'w-24 h-24',
                    'rounded-xl',
                    'shadow'
                )}>
                    <FaBowlRice size={30} color="#5F33E1" />
                </Link>
            </div>
        </div>
    )
}
