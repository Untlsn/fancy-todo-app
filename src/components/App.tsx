import React from 'react';
import '~/assets/style/global.css';
import List from '~/components/organisms/List';

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen dark:bg-gray-900'>
      <List />
    </div>
  );
};

export default App;
