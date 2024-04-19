import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Moon from './Moon';
import ISS from './ISS';

const Earth = ({ displacementScale }) => {
  const earthRef = useRef();
  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture([
    '/assets/earth_day.jpg',
    '/assets/earth_normal_map.jpg',
    '/assets/earth_specular_map.jpg',
    '/assets/earth_displacement_map.jpg',
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      <mesh receiveShadow ref={earthRef}>
        {/*radius, X-axis, Y-axis*/}
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={5000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>
      <ISS />
      <Moon />
    </group>
  );
};

export default Earth;
