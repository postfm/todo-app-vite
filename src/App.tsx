import { useState } from 'react';
import Form from './components/form';
import TodoList from './components/todoList';
import { TODOS } from './constants/todos';
import { nanoid } from 'nanoid';

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [filter, setFilter] = useState('All');

  function addTodo(name: string) {
    const newTodo = { id: `todo-${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
  }

  function toggleTodoCompleted(id: string) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function clearCompleted() {
    const clearedTodos = todos.filter((todo) => !todo.completed);
    setTodos(clearedTodos);
  }

  console.log(filter);

  return (
    <main className='w-full min-h-screen bg-[#F5F5F5] font-[Roboto] font-thin'>
      <p className='text-9xl text-[#E9DAD9] text-center antialiased'>todos</p>
      <section>
        <div className='w-3xl mx-auto'>
          <Form addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodoCompleted={toggleTodoCompleted}
            clearCompleted={clearCompleted}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
