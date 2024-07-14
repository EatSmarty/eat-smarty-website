import type { IApiResponse } from '@/interfaces/api-response';
import additivesList from '@/lib/additives.json';

export async function GET(_request: Request) {
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      additivesList,
    },
  };

  return Response.json(sampleResponse);
}
