import type { IApiResponse } from '@/interfaces/api-response';
import additivesList from '@/lib/additives.json';
import type { IAdditive } from '@/lib/i-additive';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const additiveId = params.id;
  const additiveList: IAdditive[] = additivesList;

  // filter the additiveList by id
  const selectedAdditive = additiveList.filter(
    (additive: IAdditive) => (
      additive.eNumber.toLowerCase() === additiveId.toLowerCase()
    ),
  );
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      sample: selectedAdditive,
    },
  };

  return Response.json(sampleResponse);
}
