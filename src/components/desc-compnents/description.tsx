import clsx from 'clsx';

export default function Description() {
  return (
    <div className={clsx(
      'desc',
      'my-5',
      'text-left',
    )}
    >
      <span className={clsx(
        'text-gray-500 ',
        'mr-2',
      )}
      >
        description
      </span>
      <span className={clsx(
        'desc',
        'text- text-xl',
      )}
      >
        Naturally occurring orange/yellow colour,
        Extracted from the spice turmeric
      </span>
    </div>
  );
}
