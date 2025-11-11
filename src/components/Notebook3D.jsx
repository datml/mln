import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import Bookmark3D from './Bookmark3D';

const Notebook3D = ({ bookNumber, position, coverImage }) => {
  const groupRef = useRef();
  const frontCoverRef = useRef();
  const pagesGroupRef = useRef();
  
  const [isOpen, setIsOpen] = useState(false);
  const [openProgress, setOpenProgress] = useState(0);

  // Load texture cho bìa sổ
  const coverTexture = useLoader(TextureLoader, coverImage);

  // Animation mở sổ - bìa lật sang trái như sách thật
  useFrame(() => {
    if (isOpen && openProgress < 1) {
      setOpenProgress(prev => Math.min(prev + 0.03, 1));
    } else if (!isOpen && openProgress > 0) {
      setOpenProgress(prev => Math.max(prev - 0.03, 0));
    }

    // Bìa trước lật sang trái (từ phải sang trái)
    if (frontCoverRef.current) {
      frontCoverRef.current.rotation.y = openProgress * Math.PI * 0.95;
    }
    
    // Các trang cũng mở theo nhưng ít hơn
    if (pagesGroupRef.current) {
      pagesGroupRef.current.rotation.y = openProgress * Math.PI * 0.6;
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const bookWidth = 1.6;
  const bookHeight = 2.2;
  const bookThickness = 0.08;
  const spineWidth = 0.12;

  return (
    <group ref={groupRef} position={position}>
      {/* Back Cover (bìa sau - cố định ở bên phải, màu nâu) */}
      <mesh position={[bookWidth / 2 - spineWidth / 2, 0, -bookThickness / 2]} onClick={handleClick} castShadow receiveShadow>
        <boxGeometry args={[bookWidth - spineWidth, bookHeight, bookThickness]} />
        <meshStandardMaterial color="#5D4037" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Spine (gáy sổ ở giữa - trục xoay) */}
      <mesh 
        position={[0, 0, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        onClick={handleClick}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[bookThickness * 1.5, bookHeight, spineWidth]} />
        <meshStandardMaterial color="#3E2723" roughness={0.9} />
      </mesh>

      {/* Pages Group (các trang giấy ở bên phải - cố định) */}
      <group position={[bookWidth / 2 - spineWidth / 2, 0, 0]}>
        {/* Stack of pages */}
        {[...Array(20)].map((_, i) => (
          <mesh 
            key={`page-${i}`} 
            position={[0, 0, i * 0.003 - 0.02]}
            onClick={handleClick}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[bookWidth - spineWidth, bookHeight - 0.03, 0.001]} />
            <meshStandardMaterial 
              color="#FFFEF0" 
              side={THREE.DoubleSide}
              roughness={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Front Cover Group (bìa trước với texture) - xoay từ gáy giữa sang TRÁI */}
      <group 
        ref={frontCoverRef} 
        position={[0, 0, 0]}
      >
        {/* Front cover with texture */}
        <mesh 
          position={[bookWidth / 2 - spineWidth / 2, 0, bookThickness / 2 + 0.05]}
          onClick={handleClick}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[bookWidth - spineWidth, bookHeight, bookThickness]} />
          <meshStandardMaterial 
            map={coverTexture} 
            roughness={0.7}
            metalness={0.05}
          />
        </mesh>

        {/* Bookmark gắn vào bìa trước */}
        <group position={[bookWidth / 2 - spineWidth / 2, 0, bookThickness / 2 + 0.05]}>
          <Bookmark3D type={bookNumber} />
        </group>
      </group>

      {/* Pages that flip (một vài trang sẽ lật cùng bìa) */}
      <group 
        ref={pagesGroupRef} 
        position={[0, 0, 0]}
      >
        {[...Array(5)].map((_, i) => (
          <mesh 
            key={`flip-page-${i}`} 
            position={[bookWidth / 2 - spineWidth / 2, 0, bookThickness / 2 + 0.03 - i * 0.004]}
            onClick={handleClick}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[bookWidth - spineWidth, bookHeight - 0.03, 0.001]} />
            <meshStandardMaterial 
              color="#FFFEF0" 
              side={THREE.DoubleSide}
              roughness={0.9}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default Notebook3D;
