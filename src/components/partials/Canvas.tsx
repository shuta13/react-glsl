import React from 'react';
import SampleShader from './SampleShader';

import './Canvas.scss';

const Canvas: React.FC = () => {
  // add flag for menu here
  return (
    <div className="CanvasWrap">
      <div className="CanvasClip">
        <SampleShader />
      </div>
    </div>
  );
};

export default Canvas;