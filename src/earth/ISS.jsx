import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ISS = () => {
  const issRef = useRef();
  const memoizedISS = useMemo(() => {
    return useGLTF('./ISSModel/ISS_stationary.gltf');
  });

  const xAxis = 2;

  useFrame(({ clock }) => {
    //Orbit Rotation
    if (issRef.current) {
      issRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.6) * xAxis;
      issRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.6) * xAxis;
    }
  });
  return (
    <mesh ref={issRef} position={[xAxis, 0, 0]}>
      <primitive object={memoizedISS.scene} scale={0.005}></primitive>
    </mesh>
  );
};

export default ISS;
