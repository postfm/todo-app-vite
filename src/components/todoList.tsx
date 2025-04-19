import DeleteButton from './deleteButton';
import FilterButton from './filterButton';
import Todo from './todo';

export default function TodoList() {
  return (
    <div>
      <h2>What needs to be done?</h2>
      <Todo />
      <Todo />
      <Todo />
      <div>
        <p>2 items left</p>
        <div>
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <DeleteButton />
      </div>
    </div>
  );
}
