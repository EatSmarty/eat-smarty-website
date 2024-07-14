import type { IApiResponse } from '@/interfaces/api-response';
import additivesList from '@/lib/additives.json';
import type { IAdditive } from '@/lib/i-additive';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const additiveId = params.id;
  const additiveList: IAdditive[] = additivesList as IAdditive[];

  // filter the additiveList by id
  const selectedAdditive = additiveList.filter(
    (additive: IAdditive) => (
      additive.eNumber.toLowerCase() === additiveId.toLowerCase()
    ),
  );

  if (selectedAdditive.length === 0) {
    return Response.json({
      okay: false,
      error: 'Additive not found!',
    }, {
      status: 404,
    });
  }

  if (selectedAdditive.length > 1) {
    // TODO: log this error to the server and notify the admin

    return Response.json({
      okay: false,
      error: 'Multiple additives found! Please contact the administrator!',
    }, {
      status: 501,
    });
  }

  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      sample: selectedAdditive,
    },
  };

  return Response.json(sampleResponse);
}
