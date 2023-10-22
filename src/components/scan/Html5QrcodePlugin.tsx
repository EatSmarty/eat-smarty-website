"use client";
import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import clsx from "clsx";

interface Html5QrcodePluginProps {
    fps?: number;
    qrbox?: number;
    aspectRatio?: number;
    disableFlip?: boolean;
    verbose?: boolean;
    qrCodeSuccessCallback: (decodedText: string) => void;
    qrCodeErrorCallback?: (errorMessage: string) => void;
}

const qrcodeRegionId = "html5qr-code-full-region";

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = (props) => {
    const html5QrcodeScannerRef = useRef<Html5QrcodeScanner | null>(null);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-shadow
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
            throw new Error("qrCodeSuccessCallback is a required callback.");
        }

        html5QrcodeScannerRef.current = new Html5QrcodeScanner(
            qrcodeRegionId,
            config,
            verbose,
        );

        html5QrcodeScannerRef.current.render(
            props.qrCodeSuccessCallback,
            props.qrCodeErrorCallback,
        );

        return () => {
            // Clear the scanner when the component unmounts
        };
    }, []);

    return (
        <section className={clsx(
            "flex justify-center items-center flex-col",
        )} >
            <div id={qrcodeRegionId} className={clsx(
                "shadow",
                "border-2",
                "rounded",
                "mt-40 px-5",
                "w-3/4",
            )}>
            </div>
        </section>

    );
};

export default Html5QrcodePlugin;
