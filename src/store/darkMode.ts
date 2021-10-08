import { createEffect, createSignal } from '~/reactive';

export const [darkMode, setDarkMode] = createSignal(window.matchMedia?.('(prefers-color-scheme: dark)').matches);

createEffect(() => {
  const lists = document.querySelector('body')!.classList;
  if (darkMode()) lists.add('dark');
  else lists.remove('dark');
});

