import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  return (
    <main className='w-full min-h-screen bg-[#F5F5F5] font-[Roboto] font-thin'>
      <p className='text-9xl text-[#E9DAD9] text-center antialiased'>todos</p>
      <section>
        <div className='w-3xl mx-auto'>
          <Form />
          <TodoList />
        </div>
      </section>
    </main>
  );
}

export default App;
