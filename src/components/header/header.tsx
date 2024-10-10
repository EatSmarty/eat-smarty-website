'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function Header() {
  const router = usePathname();

  let mainRoute;
  switch (router) {
    case '/':
      mainRoute = 'Home';
      break;
    case '/additives':
      mainRoute = 'Additives';
      break;
    case '/scan':
      mainRoute = 'Scan';
      break;
    case '/setting':
      mainRoute = 'Setting';
      break;
    case '/setting/faq':
      mainRoute = 'Faq';
      break;
    case '/setting/contactus':
      mainRoute = 'Contact';
      break;
    default:
      break;
  }

  return (
    <header className={clsx(
      'h-[50px] w-full sticky',
      'md:h-[50px]',
      'px-5 md:px-10',
      'bg-[#F3F0FF]',
      'rounded-bl-xl',
      'rounded-br-xl',
      'font-bold',
      'flex items-center justify-between md:justify-around',
      'z-20',
      'top-0',
      'shadow',
    )}
    >
      <div className={clsx(
        'flex items-center justify-center',
      )}
      >
        {router === '/setting/[]'
          || router === '/additives/[]'
          ? (
            <Link href="/setting">
              <IoIosArrowBack size={30} />
            </Link>
          ) : ''}
        <Image
          src="https://github.com/EatSmarty/eat-smarty-website/blob/main/public/cardiogram.png?raw=true"
          width={35}
          height={35}
          alt="logo"
          data-test="logo"
          className={clsx(
            'ml-5 mr-1',
          )}
        />
        <h1 className={clsx(
          'ml-1 text-xl font-bold',
        )}
        >
          Eatsmarty
        </h1>
      </div>
      <span />
      <span />
      <div>
        <h1 className={clsx(
          'ml-2 text-xl font-bold',
        )}
        >
          {mainRoute}
        </h1>
      </div>
    </header>
  );
}
