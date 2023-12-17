import clsx from 'clsx';
import varient from '@/utilise/varient';

export default function Banner({ }) {
  return (
    <section className={clsx(
      'banner',
      'text-5xl',
      'mb-5',
    )}
    >
      <h2>
        <div className={clsx(
          'flex items-center justify-center',
        )}
        >
          <span className={clsx(
            'title',
            'text-[#0069FE]',
            'mr-2 font-bold',
            'fancy',
          )}
          >
            {varient.title}
          </span>
          <span className={clsx(
            'sub-title',
            'font-bold',
            'text-gray-500',
          )}
          >
            Barcode-wise,
          </span>
        </div>
        <div className={clsx(
          'flex items-center justify-center',
        )}
        >
          <span className={clsx(
            'sub-title',
            'font-bold',
            'text-gray-500',
          )}
          >
            smarty-wise
          </span>
        </div>
      </h2>
    </section>
  );
}
