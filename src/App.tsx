import React from 'react';
import { Surface } from 'gl-react-dom';
import Canvas from '../src/components/Canvas';

const App: React.FC = () => {
  return (
    <Surface width={300} height={300}>
      <Canvas></Canvas>
    </Surface>
  );
}

export default App;
