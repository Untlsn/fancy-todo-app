import React from 'react';
import Input from '~/components/molecules/Input';
import BottomMenu from '~/components/molecules/BottomMenu';
import ListCore from '~/components/molecules/ListCore';

const List = () => {
  return (
    <div>
      <Input />
      <div className='bg-white dark:bg-gray-800 shadow-lg mt-8 rounded'>
        <ListCore />
        <BottomMenu />
      </div>
    </div>
  );
};

export default List;