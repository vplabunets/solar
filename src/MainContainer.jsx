import React, { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import AnimatedStars from './AnimatedStars';
import Earth from './earth/Earth';
import * as THREE from 'three';
import Moon from './earth/Moon';

const MainContainer = () => {
  const directionalLightRef = useRef();
  const directionalLightRefTwo = useRef();
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
  // useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink');
  return (
    <>
      <color attach='background' args={['black']} />
      <AnimatedStars />
      <directionalLight castShadow ref={directionalLightRef} position={[0, 0, 10]} intensity={10} color={'white'} />
      <directionalLight castShadow ref={directionalLightRefTwo} intensity={10} position={[0, 0, -10]} />
      {/* <ambientLight /> */}
      <Earth displacementScale={0.15} />
    </>
  );
};

export default MainContainer;
