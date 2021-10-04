import React from 'react';

interface CircleBoxProps {
  check: boolean
  onClick(bool: boolean): void
}

const CircleBox = ({ check, onClick }: CircleBoxProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 16 16"
      className={`border-solid border-2 border-gray-400 rounded-full h-6 w-6 cursor-pointer
         ${check && 'border-none bg-gradient-to-br from-blue-400 to-purple-500'}`}
      onClick={() => onClick(!check)}
    >
      <path
        className={check ? '' : 'invisible'}
        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
      />
    </svg>
  );
};

export default CircleBox;