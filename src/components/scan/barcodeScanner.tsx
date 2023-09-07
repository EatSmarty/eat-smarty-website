"use client"

import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin';

const BarcodeScanner: React.FC = () => {
  const [barcode, setBarcode] = useState("")

  const onNewScanResult = (decodedText: string) => {
    console.log(decodedText);

  };

  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
};

export default BarcodeScanner;