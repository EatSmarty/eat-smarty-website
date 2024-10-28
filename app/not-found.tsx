import Colors from '@/utilise/varient';
import clsx from 'clsx';
import Link from 'next/link';

export default function NotFound() {

  return (
    <div className={clsx(
      'flex flex-col items-center justify-center',
    )}
    >
      <h1 className={clsx(
        'text-red-500',
        'font-semibold'
      )}
      >
        Not found – 404!
      </h1>
      <div className={clsx(
        ' text-white',
        `bg-[${Colors.colors['primary-color']}]`,
        'my-2 px-2 py-1',
        'rounded',
      )}
      >
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
