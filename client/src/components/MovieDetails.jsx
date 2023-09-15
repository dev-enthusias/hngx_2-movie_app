import banner from '../assets/Banner.jpg';
import playMovie from '../assets/PlayMovie.svg';
import arrowDown from '../assets/Arrow.svg';
import star from '../assets/Star.svg';
import ticket from '../assets/Tickets.svg';
import list from '../assets/List.svg';
import rectangle from '../assets/Rectangle.jpg';

export default function MovieDetails({ data }) {
  return (
    <div className='flex-grow px-9 py-10 '>
      <div className='relative mb-7'>
        <img src={banner} alt='Movie banner' className='max-w-full' />
        <div className='max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
          <div className='p-4 bg-gray-200 inline-block rounded-full opacity-80'>
            <img src={playMovie} alt='play icon' className='' />
          </div>
          <span className='text-white text-2xl'>Watch Trailer</span>
        </div>
      </div>
      <section className='grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <div className='mb-5'>
            <div className='flex gap-x-4 mb-6'>
              <p className='text-xl font-bold text-gray-500'>
                <span data-testid='movie-title'>{data.original_title}</span> •{' '}
                <span data-testid='movie-release-date'>
                  {data.release_date}
                </span>{' '}
                • <span data-testid='movie-runtime'>{data.runtime}m</span>
              </p>
              <span className='py-1 px-4 rounded-full border border-gray-300 text-pink-700 font-medium text-sm'>
                Action
              </span>
              <span className='py-1 px-4 rounded-full border border-gray-300 text-pink-700 font-medium text-sm'>
                Drama
              </span>
            </div>
            <p className='text-gray-700' data-testid='movie-overview'>
              {data.overview}
            </p>
          </div>

          <div className='py-4 text-gray-700'>
            <p className='mb-7'>
              Director : <span className='text-pink-700'>Joseph Kosinski</span>
            </p>
            <p className='mb-7'>
              Writers :{' '}
              <span className='text-pink-700'>
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p className='mb-7'>
              Stars :{' '}
              <span className='text-pink-700'>
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
          </div>

          <div className='flex justify-between border rounded-lg items-center pr-4'>
            <div className='py-3'>
              <span className='py-3 px-5 bg-pink-700 border border-pink-700 text-white rounded-lg mr-6'>
                Top rated movie #65
              </span>
              <span className='font-medium text-gray-800'>
                Awards 9 nominations
              </span>
            </div>
            <img src={arrowDown} alt='arrow down icon' />
          </div>
        </div>

        <div className='col-span-1'>
          <div className='mb-8'>
            <div className='flex justify-end items-center gap-2 mb-6 text-gray-700'>
              <img src={star} alt='star' />
              <p>
                <span className='text-xl text-gray-400'>8.5</span> | 350k
              </p>
            </div>
            <button className='w-full flex gap-2 text-white rounded-lg bg-pink-700 justify-center py-3 items-center mb-3 font-medium'>
              <img src={ticket} alt='' />
              See Showtimes
            </button>
            <button className='w-full flex gap-2 text-gray-700 rounded-lg bg-pink-100 border border-pink-700 justify-center py-3 items-center font-medium'>
              <img src={list} alt='' />
              More watch options
            </button>
          </div>

          <div className='relative overflow-hidden'>
            <img src={rectangle} alt='' />
            <div className='flex items-center gap-3 text-xs text-white bg-black/40 absolute bottom-0 left-0 w-full rounded-xl py-1 px-2'>
              <img src={list} alt='list icon' />
              <span className='text-white'>
                The Best Movies and Shows in September
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
