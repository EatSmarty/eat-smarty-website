import React from 'react';

interface EnumberProps {
  params: { number: string }
}

export default function Enumber({ params }: EnumberProps) {
  return (
    <div>
      {' '}
      {params.number}
      {' '}
    </div>
  );
}
