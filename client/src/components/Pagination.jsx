export default function Pagination() {
  return (
    <>
      <div className='hidden sm:block absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-6'>
        <ul className='flex flex-col items-end gap-y-2.5 text-gray-400 font-bold text-xs'>
          <li>1</li>
          <li>2</li>
          <li className='text-base flex items-center gap-x-1'>
            <span className='w-5 h-[3px] bg-white rounded-md'></span> 3
          </li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className='sm:hidden absolute bottom-5 left-1/2 -translate-x-1/2'>
        <ul className='flex gap-x-2'>
          <li className='w-2 h-2 rounded-full bg-gray-500'></li>
          <li className='w-2 h-2 rounded-full bg-gray-500'></li>
          <li className='w-2 h-2 rounded-full bg-white'></li>
          <li className='w-2 h-2 rounded-full bg-gray-500'></li>
          <li className='w-2 h-2 rounded-full bg-gray-500'></li>
        </ul>
      </div>
    </>
  );
}
