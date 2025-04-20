export default function Todo() {
  return (
    <div className='border-b-1 border-[#EDEDED]'>
      <label className='text-[#505050] pl-20 py-8 block '>
        <input
          type='checkbox'
          className='invisible absolute'
        />
        <span className='absolute w-9 h-9 -ml-16 rounded-full border-1 border-[#EEEEEE] text-[#78C1B0]'>
          {/* <IoCheckmark /> */}
        </span>
        Тестовое задание
      </label>
    </div>
  );
}
