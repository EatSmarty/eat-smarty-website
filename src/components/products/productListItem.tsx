import Colors from '@/utilise/varient';
import clsx from 'clsx';

interface ProductListitemProps {
  name: string
}

export default function ProductListItem({ name }: ProductListitemProps) {



  return (
    <div className={clsx(
      'flex justify-between items-center',
      'w-full mx-5 rounded-full p-4 shadow',
      `bg-[${Colors.colors['secondary-color']}]`
    )}>
      <h1 className={clsx(
        'text font-semibold',
      )}
      >
        {name}
      </h1>
    </div>
  );
}
