import Sidebar from '../components/Sidebar';
import MovieDetails from '../components/MovieDetails';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
  );
  const detailsData = (await res).json();
  return detailsData;
}

export default function Details() {
  const detailsData = useLoaderData();
  console.log(detailsData);

  return (
    <div className='flex font-poppins'>
      <Sidebar />
      <MovieDetails />
    </div>
  );
}
