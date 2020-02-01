import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';

import './Canvas.scss'

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform float blue;
      void main() {
        gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
      }
    `
  }
});

const Canvas: React.FC = () => (
  <Node shader={shaders.helloGL}></Node>
);

export default Canvas;