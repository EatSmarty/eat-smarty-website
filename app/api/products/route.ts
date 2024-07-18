import type { IApiResponse } from '@/interfaces/api-response';
import productList from '@/lib/Product.json';

export async function GET(_request: Request) {
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      productList,
    },
  };

  return Response.json(sampleResponse);
}