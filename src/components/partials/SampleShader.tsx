import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';
import useGetWindowSize from '../hooks/useGetWindowSize'

const fragment = require('./shaders/SampleShader/frag.glsl');

const shaders = Shaders.create({
  smoke: {
    frag: GLSL`${fragment.default}`
  }
});

let payload = 0;

const SampleShader: React.FC = () => {
  const { width, height } = useGetWindowSize();
  const requestRef = useRef(0);

  // timer for animate
  const [timer, setTimer] = useState(0);
  const animate = useCallback(() => {
    payload += 0.018;
    setTimer(payload);
    requestRef.current = window.requestAnimationFrame(animate);
  }, []);
  useEffect(() => {
    requestRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return (
    <Surface width={400} height={400}>
      <Node
        shader={shaders.smoke}
        uniforms={{
          shift: 1.6,
          time: timer,
          speed: [1.0, 1.0],
          resolution: [width, height]
        }} />
    </Surface>
  );
};

export default SampleShader;