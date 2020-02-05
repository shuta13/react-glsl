import React, { useState } from 'react';
import Menu from './Menu';
import SampleShader from './SampleShader';
import GLSLPractice from './GLSLPractice';
import TheBookOfShaders from './TheBookOfShaders';

import './Canvas.scss';

const Canvas: React.FC = () => {
  const [name, setName] = useState('');
  const changeCanvas = (payload: string) => {
    setName(payload);
  }
  const RenderCanvas = () => {
    switch (name) {
      case 'SampleShader':
        return <SampleShader />;
      case 'GLSLPractice':
        return <GLSLPractice />;
      case 'TheBookOfShaders':
        return <TheBookOfShaders />;
      default:
        return <div>select</div>;
    }
  }
  return (
    <div className="CanvasWrap">
      <div className="CanvasClipWrap">
        <div className="CanvasClip">
          <RenderCanvas />
        </div>
        <Menu changeCanvas={changeCanvas} />
      </div>
    </div>
  );
};

export default Canvas;