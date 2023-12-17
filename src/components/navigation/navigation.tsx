'use client';

import clsx from 'clsx';
import Link from 'next/link';
import {
  AiOutlineHome,
  AiOutlineUnorderedList,
  AiOutlineScan,
  AiOutlineSetting,
} from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import './navigation.css';

export default function Navigation() {
  const router = usePathname();
  return (
    <nav className={clsx(
      'flex items-center justify-center',
      'relative',
    )}
    >
      <ul className={clsx(
        'rounded-tl-xl',
        'rounded-tr-xl',
        'mx-10',
        'h-20 w-11/12',
        'flex items-center justify-around',
        'shadow-2xl',
        'navigation-bottom',
      )}
      >
        <li className={`list ${router == '/' ? 'active' : ''}`}>
          <Link href="/">
            <span className="icon">
              {router == '/' ? <AiOutlineHome color="#fff" /> : <AiOutlineHome color="#000" />}
            </span>
            <span className="nav-text">Home</span>
          </Link>
          <div className={`${router == '/' ? 'indicator' : ''}`} />
          <div className={`${router == '/' ? 'shadow-indicator' : ''}`} />
        </li>
        <li className={`list ${router == '/additives' ? 'active' : ''}`}>
          <Link href="/additives">
            <span className="icon">
              {router == '/additives' ? <AiOutlineUnorderedList color="#fff" /> : <AiOutlineUnorderedList color="#000" />}
            </span>
            <span className="nav-text">Additives</span>
          </Link>
          <div className={`${router == '/additives' ? 'indicator1' : ''}`} />
          <div className={`${router == '/additives' ? 'shadow-indicator' : ''}`} />
        </li>
        <li className={`list ${router == '/scan' ? 'active' : ''}`}>
          <Link href="/scan">
            <span className="icon">
              {router == '/scan' ? <AiOutlineScan color="#fff" /> : <AiOutlineScan color="#000" />}
            </span>
            <span className="nav-text">Scan</span>
          </Link>
          <div className={`${router == '/scan' ? 'indicator2' : ''}`} />
          <div className={`${router == '/scan' ? 'shadow-indicator' : ''}`} />
        </li>
        <li className={`list ${router == '/setting' ? 'active' : ''}`}>
          <Link href="/setting">
            <span className="icon">
              {router == '/setting' ? <AiOutlineSetting color="#fff" /> : <AiOutlineSetting color="#000" />}

            </span>
            <span className="nav-text">Setting</span>
          </Link>
          <div className={`${router == '/setting' ? 'indicator3' : ''}`} />
          <div className={`${router == '/setting' ? 'shadow-indicator' : ''}`} />
        </li>
      </ul>
    </nav>
  );
}
