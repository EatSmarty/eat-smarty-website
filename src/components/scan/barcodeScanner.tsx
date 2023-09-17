"use client"
import { redirect } from 'next/navigation'
import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin';

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
        qrCodeSuccessCallback={onNewScanResult}
      />
      {barcode.length > 0 ? redirect('/product') : undefined}
    </>
  );
};

export default BarcodeScanner;