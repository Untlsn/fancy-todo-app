import React, { useRef } from 'react';
import CircleBox from '~/components/atoms/CircleBox';
import { onEnter } from '~/components/molecules/Input/helpers';
import { createPoint } from '~/components/organisms/List/helpers';
import { setPoints } from '~/store/points';

const commitPoint = (name: string) => setPoints(old => {
  old.push(createPoint(name));
});

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const commit = () => {
    if (inputRef.current?.value) {
      commitPoint(inputRef.current!.value);
      inputRef.current!.value = '';
    }
  };

  return (
    <div className='flex items-center gap-4 bg-white rounded shadow-lg py-4 px-6 dark:bg-gray-800'>
      <CircleBox check={false} onClick={commit} />
      <input
        name='text'
        ref={inputRef}
        className='border-none text-lg outline-none bg-transparent flex-1 dark:text-white'
        onKeyDown={onEnter(commit)}
      />
    </div>
  );
};

export default Input;