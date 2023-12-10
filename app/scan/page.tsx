"use client";

import { useState } from "react";
import clsx from "clsx";
import Scanner from "@/components/scan/Scanner";
import { BsUpcScan } from "react-icons/bs";
import "./camera.css";

export default function Page() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onDetected = result => {
    setResult(result);
  };
  return (
    <>
      <div className={clsx(
        "min-h-screen",
        "flex justify-center items-center flex-col",
      )}>
        <div className={clsx(
          "flex justify-center items-center",
          "rounded",
        )}>
          {camera && <Scanner onDetected={onDetected} />}
        </div>
        <button
          className="button-tap-camera"
          onClick={() => setCamera(!camera)}
        >
          {camera ? "Stop" : <BsUpcScan size={140} />}
          <p className={clsx(
            "font-bold",
            "text-2xl",
            "mb-10",
          )}>
            {result ? result : "TapToScan"}
          </p>
        </button>
      </div>
    </>
  );
}