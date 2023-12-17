import clsx from 'clsx';

export default function Tag() {
  return (
    <div className={clsx(
      'tag',
      'text-xs',
    )}
    >
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-[#fff]',
      )}
      >
        E-100
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-[#fff]',
      )}
      >
        Curcumin
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-[#fff]',
      )}
      >
        Turmeric
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-[#fff]',
      )}
      >
        Turmeric extract
      </p>
      <p className={clsx(
        'm-1 mb-2 px-2 py-1',
        'inline-block',
        'bg-[#4ade80]',
        'rounded-full',
        'text-[#fff]',
      )}
      >
        Curcumin powder
      </p>
    </div>
  );
}
