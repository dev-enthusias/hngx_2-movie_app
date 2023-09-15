import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/tv.svg';
import home from '../assets/Home.svg';
import logout from '../assets/Logout.svg';
import projector from '../assets/Projector.svg';
import tvShow from '../assets/TVShow.svg';
import calendar from '../assets/Calendar.svg';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('movie');

  const handleClick = id => {
    setActiveLink(id);
  };

  return (
    <aside className='min-w-[226px] rounded-r-[45px] border border-gray-600 flex flex-col gap-y-20 items-center pt-12 pb-10'>
      <div className='flex gap-x-6 items-center'>
        <img src={logo} alt='logo' className='w-12 h-12' />
        <span className='text-2xl font-DMsans font-bold leading-6'>MovieBox</span>
      </div>

      <ul className='flex flex-col'>
        <li>
          <Link
            onClick={() => handleClick('home')}
            className={`flex items-center gap-4 pl-10 py-7 border-r-8 ${
              activeLink === 'home'
                ? 'border-r-pink-700 bg-pink-100'
                : 'border-r-transparent'
            }`}
          >
            <img src={home} alt='home icon' />
            <span className='font-semibold text-lg text-gray-500'>Home</span>
          </Link>
        </li>

        <li>
          <Link
            onClick={() => handleClick('movie')}
            className={`flex items-center gap-4 pl-10 py-7 border-r-8 ${
              activeLink === 'movie'
                ? 'border-r-pink-700 bg-pink-100'
                : 'border-r-transparent'
            }`}
          >
            <img src={projector} alt='home icon' />
            <span className='font-semibold text-lg text-gray-500'>Movies</span>
          </Link>
        </li>

        <li>
          <Link
            onClick={() => handleClick('tv')}
            className={`flex items-center gap-4 pl-10 py-7 border-r-8 ${
              activeLink === 'tv'
                ? 'border-r-pink-700 bg-pink-100'
                : 'border-r-transparent'
            }`}
          >
            <img src={tvShow} alt='home icon' />
            <span className='font-semibold text-lg text-gray-500'>
              TV Series
            </span>
          </Link>
        </li>

        <li className='mb-5'>
          <Link
            onClick={() => handleClick('upcoming')}
            className={`flex items-center gap-4 pl-10 py-7 border-r-8 ${
              activeLink === 'upcoming'
                ? 'border-r-pink-700 bg-pink-100'
                : 'border-r-transparent'
            }`}
          >
            <img src={calendar} alt='home icon' />
            <span className='font-semibold text-lg text-gray-500'>
              Upcoming
            </span>
          </Link>
        </li>

        <li>
          <div className='w-9/12 m-auto border border-pink-700 rounded-[20px] px-4 pt-10 pb-4 bg-pink-50 mb-11'>
            <p className='font-semibold text-gray-500 mb-2'>
              Play movie quizes and earn free tickets
            </p>
            <p className='text-[11px] mb-2 text-gray-700 font-medium'>
              50k people are playing now
            </p>
            <Link className='w-full rounded-full py-1.5 text-center bg-pink-200 m-auto inline-block text-xs font-medium text-pink-700'>
              Start playing
            </Link>
          </div>
          <Link
            onClick={() => handleClick('logout')}
            className={`flex items-center gap-4 pl-10 py-7 border-r-8 ${
              activeLink === 'logout'
                ? 'border-r-pink-700 bg-pink-100'
                : 'border-r-transparent'
            }`}
          >
            <img src={logout} alt='home icon' />
            <span className='font-semibold text-lg text-gray-500'>Log Out</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
