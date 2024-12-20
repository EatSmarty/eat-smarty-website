import Color from '@/utilise/varient';
import clsx from 'clsx';

export default function Contactus() {
  return (
    <section className={clsx(
      'flex flex-col items-center justify-center',
      'text-2xl',
    )}
    >
      <p className={clsx(
        'title',
        'mb-10',
        'font-bold',
        `text-[${Color.colors['primary-color']}]`
      )}
      >
        Contact Us
      </p>
      <div className={clsx(
        'flex flex-col items-center justify-center',
        'rounded',
      )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="wave size-10 text-yellow-400"
        >
          <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967
                    8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0
                    01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255
                     24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124
                     7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
          />
        </svg>
        <p className={clsx(
          'text-center text-base text-gray-500',
          'm-10',
        )}
        >
          Hi! We are happy to hear from you. If you have any questions
          or comments about our project, please contact us.
          You can contact us via github issue. We are always
          looking for ways to improve our project, So if you want to
          work with us, please let us know!
          Thank you for your support.
        </p>
        <a
          className={clsx(
            `bg-[${Color.colors['primary-color']}]`,
            'text-white',
            'rounded',
            'mb-5  p-1.5',
          )}
          href="https://github.com/Halalvar/halalvar/issues"
          target="_blank"
        >
          Github Issues
        </a>
      </div>
    </section>
  );
}
