import AdditiveCart from '@/components/additives/additivesCard';
import clsx from 'clsx';

export default function Search({ filteredAdditives }) {
  const filtered = filteredAdditives?.map((additive) => (
    <div
      key={additive.id}
    >
      <AdditiveCart
        key={additive.id}
        isHalal={additive.isHalal}
        enumber={additive.eNumber}
        name={additive.name}
        source={additive.source}
        danger={additive.danger}
      />
    </div>
  ));

  return (
    <div className={clsx(
      'additives-list',
      'grid grid-cols-5 gap-7',
      'mb-20 mt-10',
    )}
    >
      {filtered}
    </div>
  );
}
