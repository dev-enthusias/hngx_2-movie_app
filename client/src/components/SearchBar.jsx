import { useState } from 'react';
import searchIcon from '../assets/Search.svg';

export default function SearchBar({ data }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = e => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  return (
    <form className='row-span-2 col-span-2 w-full lg:w-[505px] rounded-md border relative font-normal'>
      <input
        type='search'
        value={searchText}
        onChange={handleInputChange}
        placeholder='What do you want to watch?'
        className='appearance-none border w-full px-2.5 py-1.5 rounded-md bg-transparent focus:outline-none'
      />
      <img
        src={searchIcon}
        alt='search icon'
        className='absolute right-2 top-1/2 -translate-y-1/2'
      />
    </form>
  );
}
