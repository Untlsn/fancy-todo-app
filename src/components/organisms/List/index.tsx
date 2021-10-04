import React, { useState } from 'react';
import Input from '~/components/molecules/Input';
import CheckPoint from '~/components/molecules/CheckPoint';
import { count, createPoint, removePoint, setCheck } from './helpers';
import { Point } from './types';
import BottomMenu from '~/components/molecules/BottomMenu';


const List = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [filter, setFilter] = useState(0);

  const sortedPoints= filter == 1
    ? points.filter(it => !it.check)
    : filter == 2
      ? points.filter(it => it.check)
      : points;

  console.log(sortedPoints);

  return (
    <div>
      <Input onCommit={point => setPoints(old => [...old, createPoint(point)])} />
      <div className='bg-white dark:bg-gray-800 dark:text-white shadow-lg mt-8 rounded'>
        <ul className='p-0'>
          {
            sortedPoints.length
              ? sortedPoints.map(
                ({ id, text, check }) => <CheckPoint
                  key={id}
                  check={check}
                  text={text}
                  onCircleClick={() => setPoints(setCheck(id))}
                  onXClick={() => setPoints(removePoint(id))}
                />,
              ) : (
                <div className='h-2' />
              )
          }
        </ul>
        <BottomMenu
          leftPoints={count(points, point => !point.check)}
          onClear={() => setPoints(old => old.filter(val => !val.check))}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default List;