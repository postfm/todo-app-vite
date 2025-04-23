interface FilterButtonProps {
  name: string;
  isPressed: boolean;
  setFilter: (filterName: string) => void;
}

export default function FilterButton({ name, isPressed, setFilter }: FilterButtonProps) {
  console.log(isPressed);
  return (
    <button
      type='button'
      className='mr-6 p-2 border-2 border-transparent cursor-pointer aria-pressed:border-2 aria-pressed:rounded aria-pressed:border-[#E9DAD9]'
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className='hidden'>Show</span>
      <span>{name}</span>
      <span className='hidden'>tasks</span>
    </button>
  );
}
