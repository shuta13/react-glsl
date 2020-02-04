import React from 'react';
import { Surface } from 'gl-react-dom';
import { Shaders, Node, GLSL } from 'gl-react';

const fragment = require('./shaders/GLSLPractice/frag.glsl');

const shaders = Shaders.create({
  practice: {
    frag: GLSL`${fragment.default}`
  }
});

const GLSLPractice: React.FC = () => {
  return (
    <Surface width={400} height={400}>
      <Node
        shader={shaders.practice}
      />
    </Surface>
  );
};

export default GLSLPractice;