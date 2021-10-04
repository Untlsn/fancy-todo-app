import React, { useState } from 'react';
import Logo from '~/assets/images/logo.png';
import prevDef from '~/helpers/prevDef';
import '~/assets/style/global.css';

const App = () => {
  const [count, changeCount] = useState(0);

  return (
    <div className='flex flex-col h-screen items-center text-xl'>
      <img src={Logo} alt='' className='h-80  animate-spin-slow'/>
      <p className='m-0'>Hello Vite + Preact Comp!</p>
      <p className='m-0'>Just write in react, run in preact</p>
      <p className='m-0'>Hooks work without issues: {count}</p>
      <button
        className='border-black bg-transparent text-lg rounded w-32 mt-3
        cursor-pointer hover:bg-gray-100 transition-colors duration-300'
        onClick={() => changeCount(old => old + 1)}
        onContextMenu={prevDef(() => changeCount(old => old - 1))}
      >
        Click
      </button>
    </div>
  );
};

export default App;
