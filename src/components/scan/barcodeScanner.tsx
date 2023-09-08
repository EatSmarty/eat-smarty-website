"use client"

import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import clsx from 'clsx';

const BarcodeScanner: React.FC = () => {
  const [barcode, setBarcode] = useState("")

  const onNewScanResult = (decodedText: string) => {
    setBarcode(decodedText)
  };

  return (
    <>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        aspectRatio={1}
        disableFlip={true}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <h1 className={clsx(
        "mt-20",
        "text-center text-2xl text-green-600",
        "font-bold",
      )}>{barcode}</h1>
    </>
  );
};

export default BarcodeScanner;