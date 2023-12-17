/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';
import clsx from 'clsx';
import { TbLockAccessOff } from 'react-icons/tb';
import config from './config.json';

function Scanner(props) {
  const { onDetected } = props;
  const [accessMsg, setAccessMsg] = useState('');
  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, 'error msg');
        setAccessMsg('Please allow Eatsmarty to access camera!');
      } else {
        Quagga.start();
      }
      return () => {
        Quagga.stop();
      };
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
  }, []);

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
          'mx-5 mt-10',
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
