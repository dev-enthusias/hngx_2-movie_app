import { useLoaderData } from 'react-router-dom';

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
      <header className='px-24 h-[90vh] relative'>
        <Navbar />
        <Description />
        <Pagination />
        <img
          src={poster}
          alt='Movie poster'
          className='absolute top-0 left-0 -z-10 h-full object-cover'
        />
      </header>

      <main className='px-24 pt-16 mb-36'>
        {/* Title */}
        <div className='flex justify-between items-center mb-11'>
          <h2 className='font-bold text-4xl'>Top Rated Movie</h2>
          <p className='flex items-center'>
            <span className='text-lg text-pink-700 leading-[18px]'>
              See more
            </span>
            <img src={arrowRight} alt='icon' />
          </p>
        </div>

        {/* Movie cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-24 gap-x-4'>
          {data.results.map((data, i) => {
            console.log(data);
            return <MovieCard key={data.id} data={data} />;
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
