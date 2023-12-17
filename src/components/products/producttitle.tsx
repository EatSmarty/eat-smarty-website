import clsx from 'clsx';
import React from 'react';

export default function Producttitle({ name }) {
  return (
    <h1 className={clsx(
      'text-2xl',
    )}
    >
      {name}
    </h1>
  );
}
