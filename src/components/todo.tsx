import clsx from 'clsx';
import { IoCheckmark } from 'react-icons/io5';

interface TodoProps {
  id: string;
  name: string;
  completed?: boolean;
}

export default function Todo({ id, name, completed }: TodoProps) {
  return (
    <li className=''>
      <div className='border-b-1 border-[#EDEDED]'>
        <label
          className={clsx('text-[#505050] pl-20 py-8 block ', {
            'line-through text-[#E6E6E6]': completed,
          })}
        >
          <input
            id={id}
            type='checkbox'
            className='invisible absolute'
            defaultChecked
          />
          <span
            className={clsx('absolute w-9 h-9 -ml-16 rounded-full border-1 border-[#EEEEEE]', {
              'text-[#78C1B0] border-[#CADEDA] ': completed,
            })}
          >
            {completed && <IoCheckmark />}
          </span>
          {name}
        </label>
      </div>
    </li>
  );
}
