import imbd from '../assets/IMBD.svg';
import png from '../assets/Png.svg';
import heart from '../assets/Heart.svg';

export default function MovieCard({ data }) {
  const voteAverage = data.vote_average * 10;

  // Format Date
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = data.release_date;
  const timeStamp = new Date(date);
  const year = timeStamp.getFullYear();
  const month = timeStamp.getMonth();
  const formattedDate = `${months[month]}, ${year}`;

  return (
    <article className='font-bold relative' data-testid='movie-card'>
      <div className='h-96 mb-3'>
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt='movie poster'
          className='h-full object-cover'
          data-testid='movie-poster'
        />
      </div>

      <div className='w-8 h-8 rounded-full bg-white opacity-50 absolute top-4 right-4 flex items-center justify-center '>
        <img src={heart} alt='favourite icon' />
      </div>

      <p
        className='text-xs text-gray-400 mb-3'
        data-testid='movie-release-date'
      >
        {formattedDate}
      </p>

      <p className='text-gray-900 text-lg mb-3' data-testid='movie-title'>
        {data.original_title}
      </p>

      <div className='flex justify-between mb-3 text-xs font-normal'>
        <div className='flex gap-x-2.5'>
          <img src={imbd} alt='icon' />
          <span>
            {voteAverage < 100 ? `${voteAverage}.0` : `${voteAverage}`} / 100
          </span>
        </div>
        <div className='flex gap-x-2.5'>
          <img src={png} alt='' />
          <span>{`${voteAverage}%`}</span>
        </div>
      </div>

      <p className='text-gray-400 text-xs'>Action, Adventure, Thriller</p>
    </article>
  );
}
