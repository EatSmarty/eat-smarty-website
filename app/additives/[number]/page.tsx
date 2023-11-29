import { FC } from "react";
import Header from "@/components/header/header";
import additives from "@/lib/additives.json";
import clsx from "clsx";
import Additivessource from "@/components/additives/additivesource";
import Additivesdesc from "@/components/additives/additivesdesc";
import Additivesothername from "@/components/additives/additivesothername";
import NotFound from "./not-found";
import Approval from "@/components/additives/approval";
import Additivesexample from "@/components/additives/additivesexample";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Additivescheck from "@/components/additives/additivescheck";
import { notFound } from "next/navigation";

interface PageProps {
    params: { number: string }
}

const page: FC<PageProps> = ({ params }) => {
    const mainEnumber = additives.filter(
        (additive: { eNumber: string; }) => {
            return (
                additive.eNumber
            );
        },
    );

    const currentEnumber = mainEnumber.filter(item =>
        item.eNumber === params.number);
    const currentUrl = mainEnumber.some(item =>
        item.eNumber === params.number);

    if (!currentUrl) {
        notFound();
    }

    return (
        <>
            {currentUrl ? (
                <>
                    <Header /><div className={clsx(
                        "flex justify-center",
                        "text-xl",
                        `${currentEnumber[0]?.isHalal == true ? "bg-green-100" : undefined ||
                            currentEnumber[0]?.isHalal == false ? "bg-red-100" : undefined ||
                                currentEnumber[0]?.isHalal == null ? "bg-orange-100" : undefined}`,
                    )}>
                        <p className={clsx(
                            "mx-2",
                        )}>{params.number}</p>
                        <div>-</div>
                        <h3 className={clsx(
                            "mx-2",
                        )}>{currentEnumber[0]?.name}</h3>
                    </div><div className={clsx(
                        "flex flex-col ",
                        "mx-5",
                    )}>
                        <Additivessource
                            origin={currentEnumber[0]?.source}
                            category={currentEnumber[0]?.category} />
                        <Additivesothername
                            othername={currentEnumber[0]?.otherNames} />
                        <Additivesdesc
                            desc={currentEnumber[0]?.description} />
                        <Additivesexample
                            exampleUse={currentEnumber[0].exampleUse} />
                        <Additivescheck
                            allergy={currentEnumber[0].isAllergey ?
                                <TiTick /> :
                                <RxCross2 />}
                            halal={currentEnumber[0].isHalal ?
                                <TiTick /> :
                                <RxCross2 />} />
                        <Approval />
                    </div>
                </>
            ) : (<>
                <NotFound />
            </>)}
        </>
    );
};

export default page;