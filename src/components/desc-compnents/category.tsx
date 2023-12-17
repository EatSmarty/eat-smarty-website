import clsx from 'clsx';

export default function Category() {
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
        Category
      </span>
      <span className={clsx(
        'text-xl',
      )}
      >
        Colours
      </span>
    </div>
  );
}
