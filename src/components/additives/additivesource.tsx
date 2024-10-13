import clsx from 'clsx';
import { SourceImage } from './source';

export default function Additivessource({ origin, category, source }) {
  return (
    <div className={clsx(
      'flex items-center',
      'mt-5',
      'text-2xl',
    )}
    >
      <p className={clsx(
        "mx-2"
      )}>
        {origin}
      </p>
      <SourceImage source={source} />
      <span className={clsx(
        'mx-2',
      )}
      >
      </span>
      <p>
        {category}
      </p>
    </div>
  );
}
