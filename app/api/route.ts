import type { IApiResponse } from '@/interfaces/api-response';

export async function GET(_request: Request) {
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      text: 'Welcome to the API!',
      version: '1.0.0',
    },
  };

  return Response.json(sampleResponse);
}
