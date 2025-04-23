interface ClearCompletedButtonProps {
  clearCompleted: () => void;
}

export default function ClearCompletedButton({ clearCompleted }: ClearCompletedButtonProps) {
  return (
    <button
      type='button'
      className='cursor-pointer p-2 aria-pressed:bg-amber-200'
      aria-pressed='false'
      onClick={clearCompleted}
    >
      <span>Clear Completed</span>
      <span className='hidden'>tasks</span>
    </button>
  );
}
