import React from 'react';
import logo from './assets/logo.png'
import './header.css';
import Image from 'next/image';

type Page = {
  title: string;
};

interface HeaderProps {
  page?: Page;
}

export const Header = ({ page }: HeaderProps) => (
  <header>
    <div className="halalvar-header">
      <div>
        <h1>{page?.title}</h1>
      </div>
      <div>
        <Image
          width={40}
          height={40}
          src={logo}
          alt='logo' />
      </div>
    </div>
  </header>
);
