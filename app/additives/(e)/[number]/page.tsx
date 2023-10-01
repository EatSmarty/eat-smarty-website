import { FC } from 'react'
import Enumber from './enumber'
import Header from '@/components/header/header'
import additives from '../../additives.json'

interface pageProps {
    enumber: string
}

const page: FC<pageProps> = ({ enumber }) => {
    let mainEnumber = additives.filter(
        (additive: { eNumber: string; }) => {
            return (
                additive.eNumber
            )
        }
    )

    let currentEnumber = mainEnumber.map(item => item.eNumber)


    return (
        <>
            <Header title={'Enumber'} />
            <Enumber enumber={currentEnumber[0]} />
        </>
    )
}

export default page