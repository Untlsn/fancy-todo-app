import { v4 as uuid } from 'uuid';
import { Point } from './types';

export const createPoint = (text: string): Point => ({
  id: uuid(),
  text,
});