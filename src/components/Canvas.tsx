import React, { useEffect, useState, useCallback } from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';
import './Canvas.scss';
import useGetWindowSize from './hooks/useGetWindowSize'

const fragment = require('./shaders/fragment.glsl');

const shaders = Shaders.create({
  smoke: {
    frag: GLSL`${fragment.default}`
  }
});

let payload = 0;

const Canvas: React.FC = () => {
  const { width, height } = useGetWindowSize();

  // timer for animate
  const [timer, setTimer] = useState(0);
  const animate = useCallback(() => {
    payload += 10;
    setTimer(payload);
    window.requestAnimationFrame(animate);
  }, []);
  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <div className="CanvasWrap">
      <Surface width={400} height={400}>
        <Node
          shader={shaders.smoke}
          uniforms={{
            shift: 1.6,
            time: timer / 1000,
            speed: [1.0, 1.0],
            resolution: [width, height]
          }} />
      </Surface>
    </div>
  );
};

export default Canvas;