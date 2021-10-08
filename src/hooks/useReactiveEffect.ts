import { useEffect } from 'react';
import { createEffect } from '~/reactive';
import { useReload } from '~/hooks/useReload';

const useReactiveEffect = (fn: () => void) => {
  const reload = useReload();
  useEffect(() => {
    createEffect(() => {
      fn();
      reload();
    });
  }, []);
};

export default useReactiveEffect;