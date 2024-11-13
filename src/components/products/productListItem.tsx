import productImage from '@/assets/products/cocacola.jpg';
import Colors from '@/utilise/varient';
import clsx from 'clsx';
import Image from 'next/image';

interface ProductListitemProps {
  name: string
}

export default function ProductListItem({ name }: ProductListitemProps) {



  return (
    <div className={clsx(
      'flex justify-between items-center',
      'w-full mx-5 rounded-lg p-2',
      `bg-[${Colors.colors['primary-color']}]`
    )}>
      <h1 className={clsx(
        'text font-semibold',
      )}
      >
        {name}
      </h1>
      <Image
        width={50}
        height={50}
        src={productImage}
        className=' rounded-md'
        alt='product' />
    </div>
  );
}
