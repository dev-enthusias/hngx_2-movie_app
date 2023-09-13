import { Link } from 'react-router-dom';

import logo from '../assets/tv.svg';
import searchIcon from '../assets/Search.svg';

export default function Navbar() {
  return (
    <nav className='flex justify-between py-4 items-center font-bold mb-20 text-white'>
      {/* Logo */}
      <div className='flex gap-x-6 items-center'>
        <img src={logo} alt='logo' className='w-12 h-12' />
        <span className='text-2xl leading-6'>MovieBox</span>
      </div>

      {/* Search bar */}
      <div className='w-[505px] rounded-md border relative font-normal'>
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
      <div className='flex items-center gap-x-[27px] cursor-pointer'>
        <Link>Sign in</Link>
        <div className='w-9 h-9 rounded-full bg-pink-700 flex flex-col items-center justify-center'>
          <div className='bg-white w-4 h-0.5 mb-1'></div> {/* line */}
          <div className='bg-white w-4 h-0.5'></div> {/* line */}
        </div>
      </div>
    </nav>
  );
}
