import MovieDetailsNav from '../components/Sidebar';
import MovieDetails from '../components/MovieDetails';

export default function Details() {
  return (
    <div className='flex'>
      <MovieDetailsNav />
      <MovieDetails />
    </div>
  );
}
