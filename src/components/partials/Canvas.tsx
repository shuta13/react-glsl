import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import SampleShader from './SampleShader';
import GLSLPractice from './GLSLPractice';

import './Canvas.scss';

const Canvas: React.FC = () => {
  const [name, setName] = useState('');
  const changeCanvas = (payload: string) => {
    setName(payload);
  }
  return (
    <div className="CanvasWrap">
      <div className="CanvasClipWrap">
        <div className="CanvasClip">
          { name === 'SampleShader' && <SampleShader /> }
          { name === 'GLSLPractice' && <GLSLPractice /> }
        </div>
        <Menu changeCanvas={changeCanvas} />
      </div>
    </div>
  );
};

export default Canvas;