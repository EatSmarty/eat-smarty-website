import { FC } from 'react'
import BarcodeScanner from '@/components/scan/barcodeScanner'
import Scanned from '@/components/scan/scanned'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <>
            <Scanned />
        </>
    )
}

export default page