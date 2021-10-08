import React from 'react';
import { filter, setFilter } from '~/store/points';
import useReactiveEffect from '~/hooks/useReactiveEffect';

const Filter = () => {
  useReactiveEffect(() => filter());
  return (
    <div className='flex sm:gap-2 bottom-menu-center-buttons'>
      {
        ['All', 'Active', 'Completed'].map(
          (text, i) => (
            <span key={i} onClick={() => setFilter(i)} className={`cursor-pointer ${filter() == i && 'text-blue-600'}`}>
                {text}
              </span>
          ),
        )
      }
    </div>
  );
};

export default Filter;