import React from 'react';

interface BottomMenu {
  leftPoints: number
  onClear(): void
  filter: number
  setFilter(index: number): void
}

const BottomMenu = ({ leftPoints, onClear, filter, setFilter }: BottomMenu) => {
  return (
    <div className='flex justify-between items-center text-sm px-6 pb-3 text-gray-600'>
      <span>
        {leftPoints} points left
      </span>
      <div className='flex gap-2'>
        {
          ['All', 'Active', 'Completed'].map(
            (text, i) => (
              <span key={i} onClick={() => setFilter(i)} className={`cursor-pointer ${filter == i && 'text-blue-600'}`}>
                {text}
              </span>
            ),
          )
        }
      </div>
      <button
        className='border-none bg-transparent text-gray-500 font-bold cursor-pointer'
        onClick={onClear}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default BottomMenu;