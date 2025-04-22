export default function DeleteButton() {
  return (
    <button
      type='button'
      aria-pressed='false'
    >
      <span>Clear Completed</span>
      <span className='hidden'>tasks</span>
    </button>
  );
}
