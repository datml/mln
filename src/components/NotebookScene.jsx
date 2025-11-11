import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Notebook3D from './Notebook3D';

const NotebookScene = ({ bookNumber, coverImage }) => {
  return (
    <div className="notebook-container">
      <Canvas shadows camera={{ position: [3, 1.5, 5], fov: 45 }}>
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.6} />
        
        {/* Main directional light with shadows */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Fill lights */}
        <pointLight position={[-3, 2, 3]} intensity={0.5} />
        <pointLight position={[3, -2, -3]} intensity={0.3} />
        
        {/* Rim light */}
        <spotLight 
          position={[0, 3, -3]} 
          angle={0.5} 
          penumbra={1} 
          intensity={0.4}
        />
        
        <Suspense fallback={null}>
          <Notebook3D 
            bookNumber={bookNumber}
            position={[0, 0, 0]}
            coverImage={coverImage}
          />
        </Suspense>
        
        {/* OrbitControls cho phép xoay 3D */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3.5}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
};

export default NotebookScene;
