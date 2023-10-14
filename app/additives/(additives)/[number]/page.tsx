import { FC } from 'react'
import Header from '@/components/header/header'
import additives from '@/lib/additives.json'
import clsx from 'clsx'
import Additivessource from '@/components/additives/additivesource'
import Additivesdesc from '../../../../src/components/additives/additivesdesc'
import Additivesothername from '../../../../src/components/additives/additivesothername'
import NotFound from '@/components/additives/not-found'

interface pageProps {
    params: { number: string }
}

const page: FC<pageProps> = ({ params }) => {
    let mainEnumber = additives.filter(
        (additive: { eNumber: string; }) => {
            return (
                additive.eNumber
            )
        }
    )

    let currentEnumber = mainEnumber.filter(item => item.eNumber === params.number)
    let currentUrl = mainEnumber.some(item => item.eNumber === params.number)

    return (
        <>
            {currentUrl ? (
                <>
                    <Header title={'Enumber'} /><div className={clsx(
                        "flex justify-center",
                        "text-xl",
                        `${currentEnumber[0]?.isHalal == true ? "bg-green-100" : undefined ||
                            currentEnumber[0]?.isHalal == false ? "bg-red-100" : undefined ||
                                currentEnumber[0]?.isHalal == null ? "bg-orange-100" : undefined}`
                    )}>
                        <p className={clsx(
                            "mx-2"
                        )}>{params.number}</p>
                        <div>-</div>
                        <h3 className={clsx(
                            "mx-2"
                        )}>{currentEnumber[0]?.name}</h3>
                    </div><div className={clsx(
                        "flex flex-col ",
                        "mx-5"
                    )}>
                        <Additivessource origin={currentEnumber[0]?.source} category={currentEnumber[0]?.category} />
                        <Additivesothername othername={currentEnumber[0]?.otherNames} />
                        <Additivesdesc desc={currentEnumber[0]?.description} />
                    </div>
                </>
            ) : (<NotFound />)}
        </>
    )
}

export default page