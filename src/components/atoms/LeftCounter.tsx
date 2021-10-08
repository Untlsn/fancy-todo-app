import React from 'react';
import { createMemo } from '~/reactive';
import { count } from '~/components/organisms/List/helpers';
import { points } from '~/store/points';
import useReactiveEffect from '~/hooks/useReactiveEffect';

const leftPoints = createMemo(() => count(points(), point => !point.check));

const LeftCounter = () => {
  useReactiveEffect(() => leftPoints());

  return (
    <span>
      {leftPoints()} points left
    </span>
  );
};

export default LeftCounter;