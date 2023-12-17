import clsx from 'clsx';

export default function Description() {
  return (
    <div className={clsx(
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
        'text-xl',
      )}
      >
        Naturally occurring orange/yellow colour,
        Extracted from the spice turmeric
      </span>
    </div>
  );
}
