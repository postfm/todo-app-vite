import { IoChevronDown } from 'react-icons/io5';
import FilterButton from './filterButton';
import Todo from './todo';
import { ITodo } from '../interfaces/todo';
import ClearCompletedButton from './clear-completed-button';
import { FILTER_MAP, FILTER_NAMES } from '../constants/filter-map';

interface TodoListProps {
  todos: ITodo[];
  toggleTodoCompleted: (id: string) => void;
  clearCompleted: () => void;
  filter: string;
  setFilter: (filterName: string) => void;
}

export default function TodoList({
  todos,
  toggleTodoCompleted,
  clearCompleted,
  filter,
  setFilter,
}: TodoListProps) {
  const todoList = todos.filter(FILTER_MAP[filter]).map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      toggleTodoCompleted={toggleTodoCompleted}
    />
  ));

  const buttonList = FILTER_NAMES.map((filterName) => (
    <FilterButton
      name={filterName}
      key={filterName}
      isPressed={filter === filterName}
      setFilter={setFilter}
    />
  ));

  return (
    <div className='bg-white text-3xl shadow-2xl'>
      <h2 className='flex items-center text-[#E6E6E6] italic border-b-2'>
        <span className='px-4'>
          <IoChevronDown />
        </span>
        <span className='py-7 px-4 '>What needs to be done?</span>
      </h2>
      <ul
        role='list'
        className='list-none'
        aria-labelledby='list-heading'
      >
        {todoList}
      </ul>
      <div className='flex items-center justify-between p-4 text-lg text-[#969696]'>
        <p>
          {todos.filter((todo) => !todo.completed).length} {todos.length !== 1 ? 'items' : 'item'}{' '}
          left
        </p>
        <div className='flex justify-between'>{buttonList}</div>
        <ClearCompletedButton clearCompleted={clearCompleted} />
      </div>
    </div>
  );
}
