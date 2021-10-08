import React from 'react';
import bgDD from '~/assets/images/bg-desktop-dark.jpg';
import bgDL from '~/assets/images/bg-desktop-light.jpg';
import { darkMode } from '~/store/darkMode';
import useReactiveEffect from '~/hooks/useReactiveEffect';

const BackImage = () => {
  useReactiveEffect(() => {
    darkMode();
  });

  return (
    <img src={darkMode() ? bgDD : bgDL} alt="" className='absolute top-0 left-0 z-[-1] w-screen'/>
  );
};

export default BackImage;