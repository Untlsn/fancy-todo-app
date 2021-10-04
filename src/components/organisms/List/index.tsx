import React, { useState } from 'react';
import Input from '~/components/molecules/Input';
import { createPoint } from './helpers';
import { Point } from './types';

const List = () => {
  const [points, setPoints] = useState<Point[]>([]);

  return (
    <div className='w-[40vw]'>
      <Input onCommit={point => setPoints(old => [...old, createPoint(point)])} />
      <ul>
        {
          points.map(
            ({ id, text }) => <li key={id}>{text}</li>,
          )
        }
      </ul>
    </div>
  );
};

export default List;