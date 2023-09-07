"use client"
import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import clsx from 'clsx';

interface Html5QrcodePluginProps {
    fps?: number;
    qrbox?: number;
    aspectRatio?: number;
    disableFlip?: boolean;
    verbose?: boolean;
    qrCodeSuccessCallback: (decodedText: string) => void;
    qrCodeErrorCallback?: (errorMessage: string) => void;
}

const qrcodeRegionId = 'html5qr-code-full';

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = (props) => {
    const html5QrcodeScannerRef = useRef<Html5QrcodeScanner | null>(null);
    useEffect(() => {
        function createConfig(props: Html5QrcodePluginProps) {
            const config: any = {};
            if (props.fps) {
                config.fps = props.fps;
            }
            if (props.qrbox) {
                config.qrbox = props.qrbox;
            }
            if (props.aspectRatio) {
                config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
                config.disableFlip = props.disableFlip;
            }
            return config;
        }

        const config = createConfig(props);
        const verbose = props.verbose === true;

        if (!props.qrCodeSuccessCallback) {
            throw new Error('qrCodeSuccessCallback is a required callback.');
        }

        html5QrcodeScannerRef.current = new Html5QrcodeScanner(
            qrcodeRegionId,
            config,
            verbose
        );

        html5QrcodeScannerRef.current.render(
            props.qrCodeSuccessCallback,
            props.qrCodeErrorCallback
        );

        return () => {
            // Clear the scanner when the component unmounts
            html5QrcodeScannerRef.current?.clear().catch((error) => {
                console.error('Failed to clear html5QrcodeScanner. ', error);
            });
        };
    }, []);

    return (
        <section className={clsx(
            "flex justify-center items-center",
        )} >
            <div id={qrcodeRegionId} className={clsx(
                "bg-[#eee]",
                "rounded",
                "mt-40",
                "w-1/2",
                "flex justify-between items-center"
            )}>
            </div>
        </section>

    )
};

export default Html5QrcodePlugin;
