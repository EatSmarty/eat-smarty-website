'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AiOutlineHome,
  AiOutlineScan,
  AiOutlineUnorderedList
} from 'react-icons/ai';
import './navigation.css';

export default function Navigation() {
  const router = usePathname();
  return (
    <nav className={clsx(
      'flex items-center justify-center',
      'relative',
      'w-full',
      'sticky bottom-0',
      'bg-[#F3F0FF]',
      'rounded-tl-xl',
      'rounded-tr-xl',
    )}
    >
      <ul className={clsx(
        'h-14 w-full',
        'flex items-center justify-around',
        'shadow-2xl',
      )}
      >
        <li>
          <Link href="/">
            <span className={clsx(
              'relative',
              'flex items-center justify-center',
              'z-10',
              'mt-4',
            )}
            >
              <AiOutlineHome color="#000" size="25px" />
            </span>
          </Link>
          <span className={clsx(
            'h-1 w-7',
            'bg-[#5F33E1]',
            'drop-shadow-[0_0_14px_rgba(122,0,230,0.25)]',
            'relative z-10',
            'flex items-center justify-center',
            '-top-10 left-3',
            'rounded-b',
            `${router === '/' ? 'opacity-100' : 'opacity-0'}`,
          )}
          />
        </li>
        <li>
          <Link href="/scan">
            <span className={clsx(
              'relative bottom-5 right-[0.5px]',
              'flex items-center justify-center',
              'z-10',
              'size-[47px]',
              'bg-[#5F33E1]',
              'rounded-full',
            )}
            >
              <AiOutlineScan color="#fff" size="25px" />
            </span>
          </Link>
          {/* <span className={clsx(
            'absolute left-[5px] top-0',
            'h-7 w-14',
            'bg-[#F9F9F9]',
            'rounded-b-full',
            '-z-10',
          )}
          /> */}
        </li>
        <li>
          <Link href="/additives">
            <span className={clsx(
              'relative',
              'flex items-center justify-center',
              'z-10',
              'mt-4',
            )}
            >
              <AiOutlineUnorderedList color="#000" size="25px" />
            </span>
          </Link>
          <span className={clsx(
            'h-1 w-7',
            'bg-[#5F33E1]',
            'drop-shadow-[0_0_14px_rgba(122,0,230,0.25)]',
            'relative z-10',
            'flex items-center justify-center',
            '-top-10 left-3',
            'rounded-b',
            `${router === '/additives' ? 'opacity-100' : 'opacity-0'}`,
          )}
          />
        </li>
        {/* <li>
          <Link href="/setting">
            <span className="icon">
              {<AiOutlineSetting color="#000" />}

            </span>
            <span className="nav-text">Setting</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
