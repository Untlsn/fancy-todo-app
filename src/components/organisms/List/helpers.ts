import { v4 as uuid } from 'uuid';
import { Point } from './types';

export const createPoint = (text: string): Point => ({
  id: uuid(),
  text,
  check: false,
});

export const setCheck = (id: string) => ([...points]: Point[]) => {
  const pointID = points.findIndex(point => point.id == id);
  points[pointID].check = !points[pointID].check;

  return points;
};

export const removePoint = (id: string) => (points: Point[]) => {
  return points.filter(point => point.id != id);
};