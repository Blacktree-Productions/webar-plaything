import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import Box from './box';


ReactDOM.render(
  <Canvas>
    <ambientLight />
    <pointLight />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById('root')
);
