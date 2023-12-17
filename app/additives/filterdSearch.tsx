import React, { useState } from 'react';
import Search from '@/components/additives/search';
import clsx from 'clsx';
import Searchinput from '@/components/additives/searchinput';

export default function FilterdSearch({ additives }) {
  const [searchField, setSearchField] = useState('');

  const filteredAdditives = additives.filter(
    (additive: { name: string; eNumber: string; }) => (
      additive.name.toLowerCase()
        .includes(searchField.toLowerCase())
        || additive.eNumber.toLowerCase()
          .includes(searchField.toLowerCase())
    ),
  );

  const handleChange = (e:
  {
    target:
    { value: React.SetStateAction<string>; };
  }) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Search filteredAdditives={filteredAdditives} />
    );
  }

  return (
    <div className={clsx(
      // "w-full",
      'my-20 flex flex-col items-center justify-center',
    )}
    >
      <div className={clsx(
        'w-full px-3 md:w-3/5',
      )}
      >
        <Searchinput
          handleChange={handleChange}
          placeholder="Search"
          keyDown={undefined}
        />
      </div>
      {searchList()}
    </div>
  );
}
