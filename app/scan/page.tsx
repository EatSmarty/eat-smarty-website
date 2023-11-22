"use client";

import { useState } from "react";
import clsx from "clsx";
import Scanner from "@/components/scan/Scanner";
import { BsUpcScan } from "react-icons/bs";
import "./camera.css";
import Header from "@/components/header/header";

export default function Page() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onDetected = result => {
    setResult(result);
  };
  return (
    <>
      <Header title={"Scan"} />
      <main>
        <div className={clsx(
          "flex items-center flex-col",
          // "w-full h-full",
          "camera",
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
            {camera ? "Stop" : <BsUpcScan size={150} />}
            <p className={clsx(
              "font-bold",
              "text-2xl",
              "mt-5",
            )}>{result ? result : "Tap To Scan"}</p>
          </button>
        </div>
      </main>
    </>
  );
}