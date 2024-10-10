import clsx from 'clsx';
import { CiBoxList } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
export default function Features() {
  return (
    <section className={clsx(
      'flex flex-col items-center justify-around',
      'md:flex-row',
      'mb-10 mt-5',
      'text-base',
    )}
    >
      <div className={clsx(
        'flex items-center justify-start',
        'rounded-lg',
        'w-60 h-14',
        'bg-white',
        'shadow',
        'pl-4',
        'md:w-36 md:h-28 md:text-center md:pl-0 md:justify-center'
      )}
      >
        <div className={clsx(
          'flex items-center justify-between',
          'gap-5',
          'md:flex-col'
        )}
        >
          <span className={clsx(
            'bg-[#FFE4F2]',
            'p-1',
            'rounded-lg'
          )}>
            <CiBoxList size={25} color='#F478B8' />
          </span>
          <p className={clsx(
            'font-bold text-gray-500',
            'text-sm',
          )}
          >
            Additives List
          </p>
        </div>
      </div>
      <div className={clsx(
        'flex items-center justify-start',
        'rounded-lg',
        'w-60 h-14',
        'bg-white',
        'shadow',
        'pl-4 m-5',
        'md:w-36 md:h-28 md:text-center md:pl-0 md:justify-center'
      )}
      >
        <div className={clsx(
          'flex items-center justify-between',
          'gap-5',
          'md:flex-col'
        )}
        >
          <span className={clsx(
            'bg-[#EDE4FF]',
            'p-1',
            'rounded-lg'
          )}>
            <FaDatabase size={25} color='#9260F4' />
          </span>
          <p className={clsx(
            'font-bold text-gray-500',
            'text-sm'
          )}
          >
            Independent Database
          </p>
        </div>
      </div>
      <div className={clsx(
        'flex items-center justify-start',
        'rounded-lg',
        'w-60 h-14',
        'bg-white',
        'shadow',
        'pl-4',
        'md:w-36 md:h-28 md:text-center md:pl-0 md:justify-center'
      )}
      >
        <div className={clsx(
          'flex items-center justify-between',
          'gap-5',
          'md:flex-col'
        )}
        >
          <span className={clsx(
            'bg-[#FFE6D4]',
            'p-1',
            'rounded-lg'
          )}>
            <FaBowlFood size={25} color='#FF9142' />
          </span>
          <p className={clsx(
            'font-bold text-gray-500',
            'text-sm',
          )}
          >
            Halal Detect
          </p>
        </div>
      </div>
      <div className={clsx(
        'flex items-center justify-start',
        'rounded-lg',
        'w-60 h-14',
        'bg-white',
        'shadow',
        'pl-4 m-5',
        'md:w-36 md:h-28 md:text-center md:pl-0 md:justify-center'
      )}
      >
        <div className={clsx(
          'flex items-center justify-between',
          'gap-5',
          'md:flex-col'
        )}
        >
          <span className={clsx(
            'bg-[#E7F3FF]',
            'p-1',
            'rounded-lg'
          )}>
            <IoInformationCircleOutline size={25} color='#0087FF' />

          </span>
          <p className={clsx(
            'font-bold text-gray-500',
            'text-sm',
          )}
          >
            Information
          </p>
        </div>
      </div>
    </section>
  );
}
