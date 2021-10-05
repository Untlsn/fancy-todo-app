import React, { useEffect, useState } from 'react';
import bgDD from '~/assets/images/bg-desktop-dark.jpg';
import bgDL from '~/assets/images/bg-desktop-light.jpg';

const setTheme = (darkMode: boolean) => {
  const lists = document.querySelector('body')!.classList;
  if (darkMode) lists.add('dark');
  else lists.remove('dark');
};

const Title = () => {
  const [darkMode, setDarkMode] = useState(window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  useEffect(() => setTheme(darkMode), [darkMode]);

  return (
    <>
      <div className='absolute top-0 left-0 z-[-1] h-screen w-screen dark:bg-gray-900'>
        <img src={darkMode ? bgDD : bgDL} alt="" className='absolute top-0 left-0 z-[-1]'/>
      </div>
      <div className='flex items-center justify-between text-white mt-14 mb-6'>
        <h1 className='tracking-[1rem] text-4xl'>TODO</h1>
        <svg
          onClick={() => setDarkMode(old => !old)}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-6 w-6 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      </div>
    </>
  );
};

export default Title;