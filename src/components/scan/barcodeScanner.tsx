"use client"
import { redirect } from 'next/navigation'
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
      {barcode.length > 0 ? redirect('/scan/scanned') : undefined}
    </>
  );
};

export default BarcodeScanner;