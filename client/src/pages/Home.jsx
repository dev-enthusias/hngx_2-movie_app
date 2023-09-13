import { useLoaderData } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Description from '../components/Description';

import poster from '../assets/Poster.jpg';

export async function loader() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const response = fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
  );
  const data = (await response).json();
  return data;
}

export default function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <header className='font-DMsans px-24 h-[90vh] relative'>
        <Navbar />
        <Description />
        <Pagination />
        <img
          src={poster}
          alt='Movie poster'
          className='absolute top-0 left-0 -z-10 h-full object-cover w-full'
        />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}