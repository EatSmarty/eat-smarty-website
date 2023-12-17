import clsx from 'clsx';
import Image from 'next/image';
// import plant from "@/assets/icon/plant.png";

interface SourceInterface {
  source: string | null | undefined
}

export default function Source({ source }: SourceInterface) {
  return (
    <div className={clsx(
      'mr-2',
    )}
    >
      {
                // plant cond
                source
                    == 'plant'
                    || 'pig'
                    || 'chemistry'
                    || 'synthetic'
                    || 'insec'
                    || 'alcohol'
                  ? (
                    <Image
                      src={`./${source}.png`}
                      width={20}
                      height={20}
                      alt={`${source} icon`}
                    />
                  )
                  : undefined
            }
    </div>
  );
}
