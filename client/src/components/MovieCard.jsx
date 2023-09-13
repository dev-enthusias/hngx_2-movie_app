import imbd from '../assets/IMBD.svg';
import png from '../assets/Png.svg';
import heart from '../assets/Heart.svg';

// Delete
import poster from '../assets/poster (2).jpg';

export default function MovieCard() {
  return (
    <article className='w-64 font-bold relative'>
      <div className='h-96 mb-3'>
        <img src={poster} alt='movie poster' className='h-full object-cover' />
      </div>

      <div className='w-8 h-8 rounded-full bg-white opacity-50 absolute top-4 right-4 flex items-center justify-center '>
        <img src={heart} alt='favourite icon' />
      </div>

      <p className='text-xs text-gray-400 mb-3'>USA, 2005</p>

      <p className='text-gray-900 text-lg mb-3'>No Time To Die</p>

      <div className='flex justify-between mb-3 text-xs font-normal'>
        <div className='flex gap-x-2.5'>
          <img src={imbd} alt='icon' />
          <span>86.0 / 100</span>
        </div>
        <div className='flex gap-x-2.5'>
          <img src={png} alt='' />
          <span>97%</span>
        </div>
      </div>

      <p className='text-gray-400 text-xs'>Action, Adventure, Thriller</p>
    </article>
  );
}
