import { FC } from 'react'
import Product from './productId'


interface pageProps {
    params: { id: number }
}

const page: FC<pageProps> = ({ params }) => {
    return (
        <>
            <Product params={params} />
            {/* <Container /> */}
        </>
    )
}

export default page