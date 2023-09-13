export default function Pagination() {
  return (
    <div className='absolute top-1/2 -translate-y-1/2 right-6'>
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
  );
}
