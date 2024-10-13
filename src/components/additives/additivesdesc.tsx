import clsx from 'clsx';

export default function Additivesdesc({ desc }) {
  return (
    <div>
      <h4 className={clsx(
        'text-l text-gray-500',
        'mx-2'
      )}
      >
        description
      </h4>
      <p className={clsx(
        'mx-2',
      )}
      >
        {desc}
      </p>
    </div>
  );
}
