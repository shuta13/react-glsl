import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';
import Stats from 'stats.js';

import useGetWindowSize from '../hooks/useGetWindowSize'

const fragment = require('./shaders/SampleShader/frag.glsl');

const shaders = Shaders.create({
  smoke: {
    frag: GLSL`${fragment.default}`
  }
});

let payload = 0;

const SampleShader: React.FC<{ stats: Stats }> = ({ stats }) => {
  const { width, height } = useGetWindowSize();
  const requestRef = useRef(0);

  // timer for animate
  const [timer, setTimer] = useState(0);
  const animate = useCallback(() => {
    stats.begin();
    payload += 0.018;
    setTimer(payload);
    stats.end();
    requestRef.current = window.requestAnimationFrame(animate);
  }, []);
  useEffect(() => {
    requestRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animate]);

  // uniform params
  const unifromParams = {
    shift: 1.6,
    time: timer,
    speed_x: 0.5,
    speed_y: 0.5,
    resolution_x: width,
    resolution_y: height
  }

  return (
    <Surface width={400} height={400}>
      <Node
        shader={shaders.smoke}
        uniforms={{ ...unifromParams }} />
    </Surface>
  );
};

export default SampleShader;