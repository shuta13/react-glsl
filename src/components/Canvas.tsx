import React from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';
import './Canvas.scss';

const fragment = require('./shaders/fragment.glsl');

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`${fragment.default}`
  }
});

const Canvas: React.FC = () => (
  <Surface width={300} height={300}>
    <Node shader={shaders.helloGL}></Node>
  </Surface>
);

export default Canvas;