import Search from '@/components/additives/search';
import Searchinput from '@/components/additives/searchinput';
import clsx from 'clsx';
import React, { useState } from 'react';

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

  const handleChange = (e: {
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
      'my-10 flex flex-col items-center justify-center',
    )}
    >
      <div className={clsx(
        'w-full px-3',
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
