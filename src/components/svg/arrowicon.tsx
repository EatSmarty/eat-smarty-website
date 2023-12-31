import clsx from 'clsx';
import React from 'react';

export default function Arrowicon({
  color = 'none',
}) {
  return (
    // <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={clsx(
        'mr-4 h-8 w-6',
        'duration-200 hover:mr-3',
        'font-bold',
      )}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
