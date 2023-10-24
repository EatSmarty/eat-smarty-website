import React from "react";
import clsx from "clsx";
import ImageContainer from "./imagecontainer";
import Producttitle from "./producttitle";
import Productdecscription from "./productdecscription";
import Source from "@/components/additives/source";
import Ishalal from "@/components/additives/ishalal";

interface ContainerInterface {
    // code: number | null;
    // enumber: string;
    // name: string;
    // isHalal: boolean | null;
    // source: string;
    danger: string | number
}

export default function Container({ }: ContainerInterface) {
    return (
        <div className={clsx(
            "flex justify-center items-center flex-col",
            "my-5",
            "w-full",
        )}>
            <ImageContainer />
            <span className={clsx(
                "flex justify-start flex-col",
                "w-1/2",
                "my-10",
            )}>
                <Producttitle />
                <div className={clsx(
                    "flex items-center",
                    "text-gray-500",
                )}>
                    <span className={clsx(
                        "mx-2 my-2",
                    )}>
                        Plant Origin
                    </span>
                    <Source source={"plant"} />
                </div>
                <div className={clsx(
                    "flex items-center",
                    "text-gray-500",
                )}>
                    <p className={clsx(
                        "mx-2",
                    )}>
                        Halal
                    </p>
                    <Ishalal isHalal={true} />
                </div>
                <Productdecscription />
            </span>
            {/* <GaugeProduct/> */}
        </div >
    );
}
