import { Link, useLoaderData } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Description from '../components/Description';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

import poster from '../assets/Poster.jpg';
import arrowRight from '../assets/ChevronRight.svg';

export async function loader() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const response = fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  );
  const data = (await response).json();
  return data;
}

export default function Home() {
  const data = useLoaderData();

  return (
    <>
      <header className='px-4 sm:px-14 lg:px-16 h-screen relative w-full'>
        <Navbar />
        <Description />
        <Pagination />
        <img
          src={poster}
          alt='Movie poster'
          className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
        />
      </header>

      <main className='px-4 lg:px-16 pt-16 mb-36'>
        {/* Title */}
        <div className='flex justify-between items-center mb-11'>
          <h2 className='font-bold text-xl lg:text-4xl'>Top Rated Movie</h2>
          <p className='flex items-center'>
            <span className='text-base lg:text-lg text-pink-700 leading-[18px]'>
              See more
            </span>
            <img src={arrowRight} alt='icon' />
          </p>
        </div>

        {/* Movie cards */}
        <div className='grid gap-x-4 grid-cols-1 xs:grid-cols-2 md:max-[1040px]:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-12 sm:gap-y-24'>
          {data.results.slice(0, 10).map(data => {
            return (
              <Link key={data.id} to={`/movies/${data.id}`}>
                <MovieCard data={data} />
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
