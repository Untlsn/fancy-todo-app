import React from 'react';
import '~/assets/style/global.css';
import List from '~/components/organisms/List';
import Title from '~/components/organisms/Title';

const App = () => {

  return (
    <div className='flex flex-col items-center h-screen text-gray-500'>
      <div className='w-[90vw] md:w-[65vw] lg:w-[40vw]'>
        <Title />
        <List />
        <div className='text-center mt-24 md:mt-8'>
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
};

export default App;
