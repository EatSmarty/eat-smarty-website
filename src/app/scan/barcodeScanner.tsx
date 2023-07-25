import { CameraEnhancer } from "dynamsoft-camera-enhancer";
import { PlayCallbackInfo } from "dynamsoft-camera-enhancer/dist/types/interface/playcallbackinfo";
import { TextResult,BarcodeReader } from "dynamsoft-javascript-barcode";
import React from "react";
import { ReactNode } from "react";

export interface ScannerProps{
  isActive?: boolean;
  children?: ReactNode;
  interval?: number;
  license?: string;
  onInitialized?: (enhancer:CameraEnhancer,reader:BarcodeReader) => void;
  onScanned?: (results:TextResult[]) => void;
  onPlayed?: (playCallbackInfo: PlayCallbackInfo) => void;
  onClosed?: () => void;
}

const BarcodeScanner = (props:ScannerProps): React.ReactElement => {
    const container = React.useRef(null)
    return (
        <div ref={container} style={{}}>
            <div className="dce-video-container">
                
            </div>
        </div>
    )
}

export default BarcodeScanner;