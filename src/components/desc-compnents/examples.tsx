import clsx from 'clsx';

export default function Examples() {
  return (
    <div className={clsx(
      'mb-5',
      'text-left',
    )}
    >
      <span className={clsx(
        'text-gray-500 ',
        'mr-2',
      )}
      >
        Example
      </span>
      <span className={clsx(
        'text-xl',
      )}
      >
        Used in pastries,
        confectionery,
        sauces, and soups
      </span>
    </div>
  );
}
