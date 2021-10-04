import { KeyboardEvent } from 'react';

export const onEnter = (fn: () => void) => <T>({ code }: KeyboardEvent<T>) => {
  if (code == 'Enter') fn();
};