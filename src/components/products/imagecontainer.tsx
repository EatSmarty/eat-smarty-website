'use client';

import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import productpic from '@/assets/products/cocacola.jpg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ImgcontainerInterface {
  src: string | StaticImport
}

export default function Imgcontainer({ src }: ImgcontainerInterface) {
  return (
    <Image
      className={clsx(
        'rounded',
        'shadow',
      )}
      src={src}
      height={200}
      width={200}
      alt="products"
    />
  );
}
