/* eslint-disable no-console */
import clsx from 'clsx';
import Quagga from 'quagga';
import { useEffect, useState } from 'react';
import { TbLockAccessOff } from 'react-icons/tb';
import config from './config.json';

function Scanner(props) {
  const { onDetected } = props;
  const [accessMsg, setAccessMsg] = useState('');
  useEffect(() => {
    Quagga.init({
      ...config,
      inputStream: {
        type: 'LiveStream',
        constraints: {
          ...config.inputStream.constraints,
          facingMode: 'environment', // To use the rear camera on mobile devices
          width: { ideal: 1920 }, // Set the width to a high value (e.g., 1920px)
          height: { ideal: 1080 }, // Set the height to a high value (e.g., 1080px)
          advanced: [{ focusMode: "continous" }]
        },
      },
    },
      (err) => {
        if (err) {
          console.log(err, 'error msg');
          setAccessMsg('Please allow Eatsmarty to access camera!');
        } else {
          Quagga.start();
        }
      });

    // detecting boxes on stream
    Quagga.onProcessed((result) => {
      const drawingCtx = Quagga.canvas.ctx.overlay;
      const drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute('width')),
            Number(drawingCanvas.getAttribute('height')),
          );
          result.boxes
            .filter((box) => box !== result.box)
            .forEach((box) => {
              Quagga.ImageDebug.drawPath(
                box,
                { x: 0, y: 1 },
                drawingCtx,
                {
                  color: 'green',
                  lineWidth: 2,
                },
              );
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(
            result.box,
            { x: 0, y: 1 },
            drawingCtx,
            {
              color: '#00F',
              lineWidth: 2,
            },
          );
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            { color: 'red', lineWidth: 3 },
          );
        }
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    Quagga.onDetected(detected);
  });

  const detected = (result) => {
    onDetected(result.codeResult.code);
  };

  return (
    <div className={clsx(
      'flex flex-col items-center justify-center',
    )}
    >
      <div>
        <p className={clsx(
          'text-2xl',
          'text-center',
        )}
        >
          {accessMsg}
        </p>
        <div className={clsx(
          'flex items-center justify-center',
        )}
        >
          {accessMsg ? <TbLockAccessOff size={60} /> : null}
        </div>
      </div>
      <div id="interactive" className="viewport" />
    </div>
  );
}

export default Scanner;
