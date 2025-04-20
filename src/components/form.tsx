export default function Form() {
  return (
    <form className='mb-4'>
      <div className='flex items-center w-full mx-auto p-4'>
        <label
          htmlFor='todo'
          className='mr-1'
        >
          Add new task:
        </label>
        <input
          type='text'
          name='todo'
          className='block grow px-2 py-1 bg-white rounded-l-sm'
          placeholder='Add new task here ...'
        />

        <button
          type='submit'
          className='px-2 py-1 bg-[#E9DAD9] rounded-r-sm'
        >
          Add
        </button>
      </div>
    </form>
  );
}
