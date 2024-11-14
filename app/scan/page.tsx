'use client';

import Scanner from '@/components/scan/Scanner';
import Products from '@/lib/Product.json';
import clsx from 'clsx';
import { redirect } from "next/navigation";
import { useState } from 'react';
import { BsUpcScan } from 'react-icons/bs';
import './camera.css';

export default function Page() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(undefined);

  const barcode = Products.map(code => code.barcode)
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onDetected = (result) => {
    setResult(result);
    console.log(result);
  };

  const mainProduct = Products.filter(product => product.barcode === result)


  // console.log(mainProduct[0].id);


  return (
    <div className={clsx(
      'min-h-screen',
      'flex flex-col items-center justify-center',
    )}
    >
      <div className={clsx(
        'flex items-center justify-center',
        'rounded',
      )}
      >
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      <button
        type="button"
        className="button-tap-camera"
        onClick={() => setCamera(!camera)}
      >
        {camera ? 'Stop' : <BsUpcScan size={140} />}
        <p className={clsx(
          'font-bold',
          'text-2xl',
          'mb-10 text-red-800',
        )}
        >
          {barcode.includes(`${result}`) ? redirect(`/category/${mainProduct[0].category}/${mainProduct[0].id}`) : 'not found'}
        </p>
      </button>
    </div>
  );
}
