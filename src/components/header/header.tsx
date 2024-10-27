'use client';

import Color from '@/utilise/varient';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function Header() {
  const pathname = usePathname();
  const checkRoute = pathname.includes("additives/E");
  const paramsEnumber = pathname.slice(11)
  const finalSlashIndex = pathname.lastIndexOf('/')
  const previousPathname = pathname.slice(0, finalSlashIndex)

  let mainRoute;
  switch (pathname) {
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
      'h-[50px]',
      'w-full max-w-[1280px]',
      'fixed top-0',
      'md:h-[50px]',
      'px-5 md:px-10',
      'bg-[#fff]',
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

        {pathname.includes('/additives/E') ||
          pathname === '/setting/faq' ||
          pathname === '/setting/contactus'
          ? (
            <Link href={previousPathname}>
              <IoIosArrowBack color={Color.colors['primary-color']} size={25} />
            </Link>
          )
          : null
        }

        <h1 className={clsx(
          'ml-1 text-xl font-bold',
          `text-[${Color.colors['primary-color']}]`

        )}
        >
          {
            checkRoute
              ? paramsEnumber
              : <p>Eatsmarty</p>
          }
        </h1>
      </div>
      <div>
        <h1 className={clsx(
          'ml-2 text-xl font-bold',
          `text-[${Color.colors['black-text']}]`
        )}
        >
          {mainRoute}
        </h1>
      </div>
    </header>
  );
}

