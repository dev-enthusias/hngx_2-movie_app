import { Link } from 'react-router-dom';

import logo from '../assets/tv.svg';
import searchIcon from '../assets/Search.svg';

export default function Navbar() {
  return (
    <nav className='grid gap-y-4 grid-cols-2 grid-row-2 lg:flex lg:flex-row lg:justify-between py-4 items-center font-bold mb-20 text-white'>
      {/* Logo */}
      <div className='col-span-1 flex gap-x-2 lg:gap-x-6 items-center'>
        <img src={logo} alt='logo' className='w-8 h-8 sm:w-12 sm:h-12' />
        <span className='text-lg sm:text-2xl leading-6'>MovieBox</span>
      </div>

      {/* Search bar */}
      <div className='row-span-2 col-span-2 w-full lg:w-[505px] rounded-md border relative font-normal'>
        <input
          type='search'
          placeholder='What do you want to watch?'
          className='appearance-none border w-full px-2.5 py-1.5 rounded-md bg-transparent focus:outline-none'
        />
        <img
          src={searchIcon}
          alt='search icon'
          className='absolute right-2 top-1/2 -translate-y-1/2'
        />
      </div>

      {/* Menu */}
      <div className='col-start-2 col-end-3 row-start-1 row-end-2 justify-end flex items-center gap-x-2 sm:gap-x-[27px] cursor-pointer sm:text-lg'>
        <Link>Sign in</Link>
        <div className='w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-pink-700 flex flex-col items-center justify-center'>
          <div className='bg-white w-3 sm:w-4 h-0.5 mb-1'></div> {/* line */}
          <div className='bg-white w-3 sm:w-4 h-0.5'></div> {/* line */}
        </div>
      </div>
    </nav>
  );
}
