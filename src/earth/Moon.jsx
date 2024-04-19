import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Moon = () => {
  const moonRef = useRef();
  const [moonTexture] = useTexture(['/assets/moon_map.jpg']);

  const xAxis = 4;
  useFrame(({ clock }) => {
    //Orbit Rotation
    if (moonRef.current) {
      moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.6) * xAxis;
      moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.6) * xAxis;
      //Axis Rotation
      moonRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh castShadow ref={moonRef} position={[xAxis, 0, 0]}>
      {/*radius, X-axis, Y-axis*/}
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial map={moonTexture} shininess={5000} />
    </mesh>
  );
};

export default Moon;
