import clsx from 'clsx';

export default function Additivesothername({ othername }) {
  return (
    <div className={clsx(
      'my-5',
      'flex items-center',
    )}
    >
      <p className={clsx(
        'mx-2',
        'text-sm text-gray-500'
      )}
      >
        {othername}
      </p>
    </div>
  );
}
