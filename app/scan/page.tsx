'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Scanner from '@/components/scan/Scanner';
import { BsUpcScan } from 'react-icons/bs';
import './camera.css';

export default function Page() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onDetected = (result) => {
    setResult(result);
  };
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
          'mb-10',
        )}
        >
          {result || 'TapToScan'}
        </p>
      </button>
    </div>
  );
}
