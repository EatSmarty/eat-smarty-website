import Colors from '@/utilise/varient';
import clsx from 'clsx';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

export default function About() {
  return (
    <section className={clsx(
      'about',
      'text-2xl',
    )}
    >
      <div className={clsx(
        'text-xl',
      )}
      >
        <Link
          href="/setting/faq"
          className={clsx(
            'flex items-center justify-between',
            'w-full',
            'mt-3 py-3',
            'cursor-pointer',
            'rounded-full',
            `bg-[${Colors.colors['primary-color']}]`,
          )}
        >
          <div className={clsx(
            'flex items-center justify-center',
          )}
          >
            <p className={clsx(
              'ml-4',
              'text-white',
            )}
            >
              FAQ
            </p>
          </div>
          <MdArrowForwardIos color="white" className="mr-5 mt-1" />
        </Link>
        <Link
          href="/setting/contactus"
          className={clsx(
            'flex items-center justify-between',
            'w-full',
            'mt-3 py-3',
            'cursor-pointer',
            'rounded-full',
            `bg-[${Colors.colors['primary-color']}]`,
          )}
        >
          <div className={clsx(
            'flex items-center justify-center',
          )}
          >
            <p className={clsx(
              'ml-4',
              'text-white',
            )}
            >
              Contact Us
            </p>
          </div>
          <MdArrowForwardIos color="white" className="mr-5 mt-1" />
        </Link>
      </div>
    </section>
  );
}
