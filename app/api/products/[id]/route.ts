import { IApiResponse } from '@/interfaces/api-response';
import productsList from '@/lib/Product.json';
import type { IProduct } from '@/lib/i-product';


export async function GET(
    request: Request,
    { params }: { params: {id: number } },
) {
    const productId = params.id;
    const productList: IProduct[] = productsList as IProduct[];

    const selectedProduct = productList.filter(
        (product: IProduct) => (
            product.id == productId
        ),
    );

    // check if product doesn't exist
    if (selectedProduct.length === 0) {
        return Response.json({
            okay: false,
            error: 'Product not found!',
        }, {
            status: 404,
        });
    }

    // check if two or more product exist
    if (selectedProduct.length > 1) {
        return Response.json({
            okay: false,
            error: 'Multiple products found! Please contact the adminsistrator!',
        }, {
            status: 501,
        })
    }

    const sampleResponse: IApiResponse = {
        okay: true,
        result: {
            sample: selectedProduct,
        },
    };

    return Response.json(sampleResponse);
}