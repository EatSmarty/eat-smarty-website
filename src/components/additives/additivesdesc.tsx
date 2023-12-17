import clsx from 'clsx';
import React from 'react';

export default function Additivesdesc({ desc }) {
  return (
    <div className={clsx(
      'flex items-center',
    )}
    >
      <h4 className={clsx(
        'text-xl text-slate-500',
      )}
      >
        description |
      </h4>
      <p className={clsx(
        'mx-2',
      )}
      >
        {desc}
      </p>
    </div>
  );
}
