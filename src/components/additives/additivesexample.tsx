import clsx from 'clsx';

export default function Additivesexample({ exampleUse }) {
  return (
    <div className={clsx(
      'my-5',
      'flex flex-col'
    )}
    >
      <h4 className={clsx(
        'text-l text-gray-500',
      )}
      >
        usage
      </h4>
      <p>
        {exampleUse}
      </p>
    </div>
  );
}
