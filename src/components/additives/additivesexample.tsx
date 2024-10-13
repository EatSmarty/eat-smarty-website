import clsx from 'clsx';

export default function Additivesexample({ exampleUse }) {
  return (
    <div className={clsx(
      'my-5',
    )}
    >
      <h4 className={clsx(
        'text-l text-gray-500',
        'mx-2'
      )}
      >
        usage
      </h4>
      <p className={clsx(
        'ml-2',
      )}
      >
        {exampleUse}
      </p>
    </div>
  );
}
