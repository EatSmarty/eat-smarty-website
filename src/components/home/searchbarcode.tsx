'use client';

import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import product from '@/lib/Product.json';
import Searchinput from '../additives/searchinput';

export default function Searchbarcode() {
  const [searchField, setSearchField] = useState('');

  const handleChange = (e:
  {
    target:
    { value: React.SetStateAction<string>; };
  }) => {
    setSearchField(e.target.value);
  };

  const findIndex = product.findIndex((index) => index.barcode === searchField);
  const findCode = product.some((item) => item.barcode == searchField);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    }
  };

  return (
    <>
      <Searchinput
        placeholder="enter the barcode..."
        handleChange={handleChange}
        keyDown={handleKeyDown}
      />
      {findCode
        ? redirect(`/product/${product[findIndex].id}`)
        : undefined}
    </>
  );
}
