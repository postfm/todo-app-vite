import { ChangeEvent, FormEvent, useState } from 'react';

interface FormProps {
  addTodo: (name: string) => void;
}

export default function Form({ addTodo }: FormProps) {
  const [name, setName] = useState('');

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    if (name) {
      addTodo(name);
    }
    setName('');
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    setName(evt.target.value);
  }

  return (
    <form
      className='mb-4'
      onSubmit={handleSubmit}
    >
      <div className='flex items-center w-full mx-auto p-4'>
        <label
          htmlFor='todo'
          className='mr-1'
        >
          Add new task:
        </label>
        <input
          id='new-todos-input'
          type='text'
          name='text'
          className='block grow px-2 py-1 bg-white rounded-l-sm'
          placeholder='Add new task here ...'
          autoComplete='off'
          value={name}
          onChange={handleChange}
        />

        <button
          type='submit'
          className='px-2 py-1 bg-[#E9DAD9] rounded-r-sm cursor-pointer hover:text-white'
        >
          Add
        </button>
      </div>
    </form>
  );
}
