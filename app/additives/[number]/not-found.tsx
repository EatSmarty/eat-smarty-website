import clsx from 'clsx';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={clsx(
      'flex h-screen flex-col items-center justify-center',
    )}
    >
      <h1 className={clsx(
        'text-red-500',
      )}
      >
        Not found Additive – 404!
      </h1>
      <div className={clsx(
        'bg-green-500 text-white',
        'my-2 px-2 py-1',
        'rounded',
      )}
      >
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
