import React, { useState, useRef, useCallback, useEffect } from 'react';
import Stats from 'stats.js';

import Menu from './Menu';
import SampleShader from './SampleShader';
import GLSLPractice from './GLSLPractice';
import TheBookOfShaders from './TheBookOfShaders';

import './Canvas.scss';

const Canvas: React.FC = () => {
  const [name, setName] = useState('');
  const mount = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);

  // for stats.js
  const stats = new Stats();
  stats.showPanel(0);
  mount.current?.appendChild(stats.dom);

  const changeCanvas = (payload: string) => {
    setName(payload);
  }
  const animate = useCallback(() => {
    requestRef.current = window.requestAnimationFrame(animate);
  }, []);
  useEffect(() => {
    requestRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animate]);
  const RenderCanvas = ({ stats }: { stats: Stats }) => {
    switch (name) {
      case 'SampleShader':
        return <SampleShader stats={stats} />;
      case 'GLSLPractice':
        return <GLSLPractice stats={stats} />;
      case 'TheBookOfShaders':
        return <TheBookOfShaders stats={stats} />;
      default:
        return <div>select</div>;
    }
  }
  return (
    <div className="CanvasWrap" ref={mount}>
      <div className="CanvasClipWrap">
        <div className="CanvasClip">
          <RenderCanvas stats={stats}/>
        </div>
        <Menu changeCanvas={changeCanvas} />
      </div>
    </div>
  );
};

export default Canvas;