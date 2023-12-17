import Image from 'next/image';

interface SourceInterface {
  source: string | null | undefined
}

export function SourceImage({
  source,
}: SourceInterface): JSX.Element | null {
  const isNeedSourceImage = source === 'plant'
    || 'pig'
    || 'chemistry'
    || 'synthetic'
    || 'insec'
    || 'alcohol';

  if (!isNeedSourceImage) {
    return null;
  }

  return (
    <div className="mr-2">
      <Image
        src={`./${source}.png`}
        width={20}
        height={20}
        alt={`${source} icon`}
      />
    </div>
  );
}
