import React, { useState } from 'react';

export type Reloader = () => void

export const useReload = (): Reloader => {
  const set = useState({})[1];

  return () => set({});
};

interface RefFunction {
  (): void,
  ref(): void
}
const refFunction = () => {
  const self: RefFunction = () => self.ref();
  self.ref = () => {};
  return self;
};


export const createReloadBag = <T extends string>(...initReloaders: T[]) => {
  const reloaders = Object.fromEntries(
    initReloaders.map(
      it => [it, refFunction()],
    ),
  ) as Record<T, RefFunction>;

  const bind = (name: T) => (reload: Reloader) => reloaders[name].ref = reload;

  return { reloaders, bind };
};

export interface ReloaderProp { onReload(reload: Reloader): void }

// eslint-disable-next-line react/display-name
export const withReload = <T extends {}>(Creator: (props: T) => JSX.Element) => ({ onReload, ...props }: T & ReloaderProp) => {
  onReload(useReload());
  // @ts-ignore
  return <Creator {...props} />;
};