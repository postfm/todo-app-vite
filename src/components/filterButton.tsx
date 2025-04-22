interface FilterButtonProps {
  name: string;
}

export default function FilterButton({ name }: FilterButtonProps) {
  return (
    <button
      type='button'
      className='mr-6'
      aria-pressed='true'
    >
      <span className='hidden'>Show</span>
      <span className='capitalize'>{name}</span>
      <span className='hidden'>tasks</span>
    </button>
  );
}
