import clsx from 'clsx';
import { IoIosSearch } from 'react-icons/io';

export default function Searchinput({ handleChange, placeholder, keyDown }) {
  return (
    <label
      className={clsx(
        'flex items-center justify-start',
        'w-full',
        'bg-blue-400',
        'rounded',
        'py-2',
      )}
      htmlFor="search-input"
    >
      <IoIosSearch size={30} className={clsx('mx-2')} color="white" />
      <input
        id="search-input"
        className={clsx(
          'bg-transparent',
          'search-input',
          'text-white',
          'placeholder:text-white',
        )}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={keyDown}
      />
    </label>
  );
}
