import Colors from '@/utilise/varient';
import clsx from 'clsx';
import { IoIosSearch } from 'react-icons/io';

export default function Searchinput({ handleChange, placeholder, keyDown }) {
  return (
    <label
      className={clsx(
        'flex items-center justify-start',
        'w-full',
        `bg-[${Colors.colors['secondary-color']}]`,
        'rounded-full',
        'py-2',
      )}
      htmlFor="search-input"
    >
      <IoIosSearch size={30} className={clsx('mx-2')} color={Colors.colors['primary-color']} />
      <input
        id="search-input"
        className={clsx(
          'bg-transparent',
          'search-input',
          `text-[${Colors.colors['primary-color']}]`,
          'w-full'
        )}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={keyDown}
      />
    </label>
  );
}
