import React  from 'react';
import { setPoints } from '~/store/points';
import LeftCounter from '~/components/atoms/LeftCounter';
import Filter from '~/components/atoms/Filter';

const BottomMenu = () => {
  return (
    <div className='flex justify-between items-center text-sm px-6 pb-3 relative'>
      <LeftCounter />
      <Filter />
      <button
        className='border-none bg-transparent font-bold cursor-pointer text-current'
        onClick={() => setPoints(old => old.filter(val => !val.check))}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default BottomMenu;