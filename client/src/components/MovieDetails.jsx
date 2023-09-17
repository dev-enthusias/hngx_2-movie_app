import banner from '../assets/Banner.jpg';
import playMovie from '../assets/PlayMovie.svg';
import arrowDown from '../assets/Arrow.svg';
import star from '../assets/Star.svg';
import ticket from '../assets/Tickets.svg';
import list from '../assets/List.svg';
import rectangle from '../assets/Rectangle.jpg';

export default function MovieDetails({ data }) {
  return (
    <div className='flex-grow md:px-9 md:py-10 p-4 mb-16 md:mb-0 '>
      <div className='relative mb-7 w-full'>
        <img
          src={banner}
          alt='Movie banner'
          className='xs:max-w-full xs:h-auto h-48 w-auto'
        />
        <div className='max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
          <div className='md:p-4 p-2 bg-gray-200 inline-block rounded-full opacity-80'>
            <img src={playMovie} alt='play icon' className='' />
          </div>
          <span className='text-white text-md md:text-2xl'>Watch Trailer</span>
        </div>
      </div>

      <section className='grid lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          <div className='mb-5'>
            <div className='flex flex-wrap gap-x-4 mb-6'>
              <div className='text-xl font-bold text-gray-500'>
                <p className='inline'>
                  <span data-testid='movie-title'>{data.original_title}</span> •{' '}
                  <span data-testid='movie-release-date'>
                    {new Date(data.release_date).toUTCString()}
                  </span>{' '}
                  • <span data-testid='movie-runtime'>{data.runtime}</span>
                </p>
                <span className='py-1 px-4 rounded-full border border-gray-300 text-pink-700 font-medium text-sm ml-8'>
                  Action
                </span>
                <span className='ml-4 py-1 px-4 rounded-full border border-gray-300 text-pink-700 font-medium text-sm'>
                  Drama
                </span>
              </div>
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

          <div className='flex rounded-lg md:justify-between xs:border  md:pr-4'>
            <div className='flex flex-col gap-4 w-full xs:items-center xs:flex-row'>
              <button className='w-full xs:w-auto  py-3 px-5 bg-pink-700 text-white rounded-lg  text-center mb-4 xs:mb-0 inline-block'>
                Top rated movie #65
              </button>
              <p className='font-medium text-gray-800 text-center xs:flex-grow flex justify-between border rounded-lg xs:border-none xs:py-0 py-3 px-5 xs:px-0'>
                Awards 9 nominations
                <img src={arrowDown} alt='arrow down icon' />
              </p>
            </div>
          </div>
        </div>

        <div className='lg:col-span-1'>
          <div className='mb-8'>
            <div className='flex justify-center lg:justify-end items-center gap-2 mb-6 text-gray-700'>
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

          <div className='relative overflow-hidden -z-50 w-full md:w-auto'>
            <img src={rectangle} alt='' className='w-full' />
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
