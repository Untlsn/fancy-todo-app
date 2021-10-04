import React, { useState } from 'react';
import Input from '~/components/molecules/Input';
import CheckPoint from '~/components/molecules/CheckPoint';
import { createPoint, removePoint, setCheck } from './helpers';
import { Point } from './types';



const List = () => {
  const [points, setPoints] = useState<Point[]>([]);

  return (
    <div>
      <Input onCommit={point => setPoints(old => [...old, createPoint(point)])} />
      <div className='bg-gray-800 dark:text-white shadow mt-8'>
        <ul className='p-0 px-6'>
          {
            points.map(
              ({ id, text, check }) => <CheckPoint
                key={id}
                check={check}
                text={text}
                onCircleClick={() => setPoints(setCheck(id))}
                onXClick={() => setPoints(removePoint(id))}
              />,
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default List;