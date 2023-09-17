import { Link } from 'react-router-dom';

import logo from '../assets/tv.svg';
import SearchBar from './SearchBar';

export default function Navbar({ apiResult }) {
  return (
    <nav className='grid gap-y-4 grid-cols-2 grid-row-2 lg:flex lg:flex-row lg:justify-between py-4 items-center font-bold mb-20 text-white'>
      {/* Logo */}
      <div className='col-span-1 flex gap-x-2 lg:gap-x-6 items-center'>
        <img src={logo} alt='logo' className='w-8 h-8 sm:w-12 sm:h-12' />
        <span className='text-lg sm:text-2xl leading-6'>MovieBox</span>
      </div>

      <SearchBar data={apiResult} />

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
