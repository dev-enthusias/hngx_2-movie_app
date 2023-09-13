import { Link } from 'react-router-dom';

import facebook from '../assets/fa-brands_facebook-square.svg';
import instagram from '../assets/fa-brands_instagram.svg';
import twitter from '../assets/fa-brands_twitter.svg';
import youtube from '../assets/fa-brands_youtube.svg';

export default function Footer() {
  return (
    <footer className='text-center pb-20 flex justify-center items-center flex-col'>
      <ul className='mb-9 flex gap-x-12 items-center'>
        <li>
          <Link to='https://facebook.com'>
            <img src={facebook} alt='' />
          </Link>
        </li>
        <li>
          <Link to='https://instagram.com'>
            <img src={instagram} alt='' />
          </Link>
        </li>
        <li>
          <Link to='https://twitter.com'>
            <img src={twitter} alt='' />
          </Link>
        </li>
        <li>
          <Link to='https://youtube.com'>
            <img src={youtube} alt='' />
          </Link>
        </li>
      </ul>
      <ul className='mb-9 flex items-center gap-x-12 font-bold text-gray-900'>
        <li>
          <Link>Condition of use</Link>
        </li>
        <li>
          <Link>Privacy & Policy</Link>
        </li>
        <li>
          <Link>Press Room</Link>
        </li>
      </ul>
      <p className='text-sm text-gray-500'>
        © 2021 MovieBox by Adriana Eka Prayudha
      </p>
    </footer>
  );
}
