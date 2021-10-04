import React from 'react';
import '~/assets/style/global.css';
import List from '~/components/organisms/List';
import Title from '~/components/organisms/Title';

const App = () => {
  return (
    <div className='flex flex-col items-center h-screen dark:bg-gray-900'>
      <div className='w-[40vw]'>
        <Title />
        <List />
      </div>
    </div>
  );
};

export default App;
