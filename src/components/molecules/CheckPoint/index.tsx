import React from 'react';
import CircleBox from '~/components/atoms/CircleBox';
import { points, setPoints } from '~/store/points';
import { useReload } from '~/hooks/useReload';

interface PointProps {
  id: string,
  onXClick(): void
}

const CheckPoint = ({ onXClick, id }: PointProps) => {
  const { text, check } = points().find(it => it.id == id)!;
  const reload = useReload();

  return (
    <div className='flex items-center justify-between gap-4 py-2 hover-visible-svg__root
      border-solid border-0 border-b-[1px] border-gray-200 dark:border-gray-700 px-6'>
      <CircleBox check={check} onClick={() => {
        setPoints(old => {
          old.find(it => it.id == id)!.check = !check;
        });
        reload();
      }} />
      <p className={`flex-1 ${check ? 'line-through text-gray-400' : 'text-gray-800 dark:text-white'}`}>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-8 w-8 cursor-pointer text-gray-500 hover-visible-svg__svg"
        viewBox="0 0 16 16"
        onClick={onXClick}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
  );
};

export default CheckPoint;