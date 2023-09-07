"use client"

import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin';

const BarcodeScanner: React.FC = () => {
  const onNewScanResult = (decodedText: string) => {
    // Handle the result here.
  };

  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={450}
        disableFlip={true}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
};

export default BarcodeScanner;