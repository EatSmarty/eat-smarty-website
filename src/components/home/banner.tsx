import varient from '@/utilise/varient';
import clsx from 'clsx';

export default function Banner() {
  return (
    <section className={clsx(
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
            'text-[#5F33E1]',
            'mr-2 font-bold',
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
