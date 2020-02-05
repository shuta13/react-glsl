import React from 'react';
import AppMenuButton from '../common/AppMenuButton';

import './Menu.scss';

const Menu: React.FC<{ changeCanvas: (payload: string) => void }> = ({ changeCanvas }) => {
  return (
    <div className="MenuWrap">
      <AppMenuButton name="SampleShader" changeCanvas={changeCanvas} />
      <AppMenuButton name="GLSLPractice" changeCanvas={changeCanvas}/>
      <AppMenuButton name="TheBookOfShaders" changeCanvas={changeCanvas}/>
    </div>
  );
}

export default Menu;