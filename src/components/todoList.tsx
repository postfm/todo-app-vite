import { IoChevronDown } from 'react-icons/io5';
import DeleteButton from './deleteButton';
import FilterButton from './filterButton';
import Todo from './todo';

export default function TodoList() {
  return (
    <div className='bg-white text-3xl shadow-2xl'>
      <h2 className='flex items-center text-[#E6E6E6] italic border-b-2'>
        <span className='px-4'>
          <IoChevronDown />
        </span>
        <span className='py-7 px-4 '>What needs to be done?</span>
      </h2>
      <Todo />
      <Todo />
      <Todo />
      <div className='flex justify-between p-4 text-lg text-[#969696]'>
        <p>2 items left</p>
        <div className='flex justify-between'>
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <DeleteButton />
      </div>
    </div>
  );
}
