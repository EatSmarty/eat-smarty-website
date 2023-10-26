import React from "react";
import clsx from "clsx";
import ImageContainer from "./imagecontainer";
import Producttitle from "./producttitle";
import Productdecscription from "./productdecscription";
import Source from "@/components/additives/source";
import Ishalal from "@/components/additives/ishalal";
import { LuVegan } from "react-icons/lu";
import { MdPregnantWoman } from "react-icons/md";
import { FaAllergies } from "react-icons/fa";
import { TbMoodSick } from "react-icons/tb";
import Badgecheck from "./badgecheck";
import Nutrition from "./nutrition";
import ProductJson from "@/lib/Product.json";

interface ContainerInterface {
    // code: number | null;
    // enumber: string;
    // name: string;
    // isHalal: boolean | null;
    // source: string;
    danger: string | number
    params: { id: number }
}

export default function Container({ params }: ContainerInterface) {

    const filterdById = ProductJson.map(productId => (
        productId
    ));

    const mainProduct = filterdById.filter(mainItem => (
        mainItem.id == params.id
    ));

    // eslint-disable-next-line no-console
    console.log(mainProduct);

    return (
        <div className={clsx(
            "w-full max-w-[1280px]",
            "px-10 md:px-10",
            "mx-auto",
            "border-b",
            "flex items-center",
        )}>
            <div className={clsx(
                "my-5",
            )}>
                <ImageContainer />
                <div className={clsx(
                    "my-10",
                )}>
                    <Producttitle name={mainProduct[0]?.title} />
                    <div className={clsx(
                        "flex items-center",
                        "text-gray-500",
                    )}>
                        <span className={clsx(
                            "my-2",
                        )}>
                            Plant Origin
                        </span>
                        <Source source={mainProduct[0]?.source} />
                    </div>
                    <div className={clsx(
                        "md:flex",
                        "text-white",
                    )}>
                        <Badgecheck
                            title="Halal"
                            truthyOption={
                                <Ishalal
                                    isHalal={mainProduct[0].isHalal}
                                />}
                            isTrue={mainProduct[0].isHalal} />
                        <Badgecheck
                            title="Vegan"
                            truthyOption={<LuVegan size={25} />}
                            isTrue={mainProduct[0].isVegan} />
                        <Badgecheck
                            title="Vegeterian"
                            truthyOption={<LuVegan size={25} />}
                            isTrue={mainProduct[0].isVegetrian} />
                        <Badgecheck
                            title="Carcinogenic"
                            truthyOption={<TbMoodSick size={25} />}
                            isTrue={mainProduct[0].isCarcinogenic} />
                        <Badgecheck
                            title="Pregnant"
                            truthyOption={<MdPregnantWoman size={30} />}
                            isTrue={mainProduct[0].isPregnant} />
                        <Badgecheck
                            title="Allergey"
                            truthyOption={<FaAllergies size={25} />}
                            isTrue={mainProduct[0].isAllergey} />
                    </div>
                    <Nutrition
                        energy={mainProduct[0].nutrition[0].energy}
                        proteins={mainProduct[0].nutrition[0].proteins}
                        carbohydrate={mainProduct[0].nutrition[0].carbohydrate}
                        sugars={mainProduct[0].nutrition[0].sugars}
                        fat={mainProduct[0].nutrition[0].fat}
                        fibre={mainProduct[0].nutrition[0].fibre}
                        sodium={mainProduct[0].nutrition[0].sodium}
                        salt={mainProduct[0].nutrition[0].salt}
                        saturates={mainProduct[0].nutrition[0].Saturates} />
                    <Productdecscription />
                </div>
                {/* <GaugeProduct/> */}
            </div >
        </div>
    );
}
