import { FC } from 'react'
import BarcodeScanner from '@/components/scan/barcodeScanner'
import Header from '@/components/header/header'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <>
      <Header title={'Scan'}></Header>
      <BarcodeScanner />
    </>
  )
}

export default page