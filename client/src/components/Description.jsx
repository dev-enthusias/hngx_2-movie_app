import play from '../assets/Play.svg';
import imbd from '../assets/IMBD.svg';
import png from '../assets/Png.svg';

export default function Description() {
  return (
    <article className='w-full sm:w-[404px] text-white absolute left-4 sm:left-14 lg:left-16 top-1/2 -translate-y-1/2'>
      <h1 className='text-5xl mb-4'>John Wick 3 : Parabellum</h1>

      <div className='flex gap-x-8 mb-4'>
        <div className='flex gap-x-2.5'>
          <img src={imbd} alt='icon' />
          <span>86.0 / 100</span>
        </div>
        <div className='flex gap-x-2.5'>
          <img src={png} alt='' />
          <span>97%</span>
        </div>
      </div>

      <p className='text-sm font-medium max-[350px]:w-full  w-[303px] mb-4'>
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>

      <button className='px-4 py-1.5 bg-pink-700 text-white rounded-md flex items-center gap-x-2'>
        <img src={play} alt='play icon' />
        <span>Watch trailer</span>
      </button>
    </article>
  );
}
