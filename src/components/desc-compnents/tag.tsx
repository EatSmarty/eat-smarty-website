import clsx from 'clsx';

export default function Tag() {
  return (
    <div className={clsx(
      'text-xs',
    )}
    >
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-white',
      )}
      >
        E-100
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-white',
      )}
      >
        Curcumin
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-white',
      )}
      >
        Turmeric
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-white',
      )}
      >
        Turmeric extract
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-white',
      )}
      >
        Curcumin powder
      </p>
    </div>
  );
}
