/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import Quagga from "quagga";
import config from "./config.json";
import clsx from "clsx";

const Scanner = props => {
    const { onDetected } = props;
    const [errMsg, setErrMsg] = useState("");
    useEffect(() => {
        Quagga.init(config, err => {
            if (err) {
                console.log(err, "error msg");
                setErrMsg("Permission denied");
            }
            Quagga.start();
            return () => {
                Quagga.stop();
            };
        });

        //detecting boxes on stream
        Quagga.onProcessed(result => {
            const drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(
                        0,
                        0,
                        Number(drawingCanvas.getAttribute("width")),
                        Number(drawingCanvas.getAttribute("height")),
                    );
                    result.boxes
                        .filter(function (box) {
                            return box !== result.box;
                        })
                        .forEach(function (box) {
                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 },
                                drawingCtx, {
                                color: "green",
                                lineWidth: 2,
                            });
                        });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 },
                        drawingCtx, {
                        color: "#00F",
                        lineWidth: 2,
                    });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(
                        result.line,
                        { x: "x", y: "y" },
                        drawingCtx,
                        { color: "red", lineWidth: 3 },
                    );
                }
            }
        });

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        Quagga.onDetected(detected);
    }, []);

    const detected = result => {
        onDetected(result.codeResult.code);
    };

    return (
        <div className={clsx(
            "flex flex-col",
        )}>
            <p className={clsx(
                "text-center",
                "bg-red-200",
                "text-red-600 text-2xl",
                "rounded",
            )}>{errMsg}</p>
            <div id="interactive" className="viewport" />
        </div>
    );
};

export default Scanner;