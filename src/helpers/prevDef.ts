import { EventHandler, SyntheticEvent } from 'react';

const prevDef = <T extends SyntheticEvent>(callback?: EventHandler<T>): EventHandler<T> => (ev) => {
  ev.preventDefault();
  if (callback) callback(ev);
};

export default prevDef;