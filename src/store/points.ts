import { createEffect, createMemo, createSignal } from '~/reactive';
import { Point } from '~/components/organisms/List/types';
import { DropResult } from 'react-beautiful-dnd';

export const [points, setPoints] = createSignal<Point[]>([]);
export const [pointsLength, setPointsLength] = createSignal(0);

createEffect(() => {
  if (points().length != pointsLength()) {
    setPointsLength(points().length);
  }
});

export const [filter, setFilter] = createSignal(0);

export const sortedPoints = createMemo(() => {
  return filter() == 1
    ? points().filter(it => !it.check)
    : filter() == 2
      ? points().filter(it => it.check)
      : points();
});

export const changePointsDirection = ({ source, destination }: DropResult) => setPoints(points => {
  const [reordered] = points.splice(source.index, 1);
  points.splice(destination!.index, 0, reordered);
  return points;
});