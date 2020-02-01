import React from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';

import fragment from './shaders/fragment.glsl'

import './Canvas.scss'

const shaders = Shaders.create({
  helloGL: {
    frag: fragment
  }
});

const Canvas: React.FC = () => (
  <Surface width={300} height={300}>
    <Node shader={shaders.helloGL}></Node>
  </Surface>
);

export default Canvas;