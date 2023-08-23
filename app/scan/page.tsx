import { FC } from 'react'
import BarcodeScanner from '@/components/scan/barcodeScanner'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <>
      <BarcodeScanner />
    </>
  )
}

export default page