import clsx from 'clsx';
import Ishalal from '../additives/ishalal';

export default function Scanned() {
  return (
    <div className={clsx(
      // 'pt-20',
      'text-center text-2xl text-green-600',
      'font-bold',
      'flex justify-center',
    )}
    >
      <p>Scanned</p>
      <Ishalal isHalal />
    </div>
  );
}
