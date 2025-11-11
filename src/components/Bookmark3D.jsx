import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Bookmark3D = ({ type }) => {
  const bookmarkRef = useRef();
  const charmRef = useRef();

  // Animation khi sổ được xoay - bookmark lung lay nhẹ
  useFrame((state) => {
    if (bookmarkRef.current && charmRef.current) {
      const time = state.clock.getElapsedTime();
      // Swing effect cho charm
      charmRef.current.rotation.z = Math.sin(time * 2) * 0.1;
      charmRef.current.position.x = Math.sin(time * 2) * 0.02;
    }
  });

  // Render các loại charm khác nhau
  const renderCharm = () => {
    switch (type) {
      case 1: // Dây chuyền sản xuất (chain links)
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Chain charm - 3 khối hình hộp nhỏ liên kết */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.12, 0.12, 0.03]} />
              <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.14, -0.08, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.12, 0.12, 0.03]} />
              <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.15, 0]}>
              <boxGeometry args={[0.12, 0.12, 0.03]} />
              <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      
      case 2: // Đồng hồ
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Clock face */}
            <mesh>
              <cylinderGeometry args={[0.18, 0.18, 0.05, 32]} />
              <meshStandardMaterial color="#2C3E50" metalness={0.6} roughness={0.3} />
            </mesh>
            {/* Clock hands */}
            <mesh position={[0, 0, 0.03]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.03, 0.12, 0.01]} />
              <meshStandardMaterial color="#E74C3C" />
            </mesh>
            <mesh position={[0, 0, 0.03]} rotation={[0, 0, -Math.PI / 6]}>
              <boxGeometry args={[0.03, 0.09, 0.01]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
          </group>
        );
      
      case 3: // Bánh răng
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Main gear body */}
            <mesh>
              <cylinderGeometry args={[0.15, 0.15, 0.06, 8]} />
              <meshStandardMaterial color="#95A5A6" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Gear teeth */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <mesh
                key={i}
                position={[
                  Math.cos((i * Math.PI) / 4) * 0.18,
                  0,
                  Math.sin((i * Math.PI) / 4) * 0.18
                ]}
                rotation={[0, (i * Math.PI) / 4, 0]}
              >
                <boxGeometry args={[0.05, 0.06, 0.09]} />
                <meshStandardMaterial color="#7F8C8D" metalness={0.9} roughness={0.1} />
              </mesh>
            ))}
          </group>
        );
      
      case 4: // Cái cân lệch
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Scale base */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.06, 0.12, 0.06]} />
              <meshStandardMaterial color="#34495E" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Scale beam - lệch */}
            <mesh position={[0, 0.09, 0]} rotation={[0, 0, -0.3]}>
              <boxGeometry args={[0.38, 0.03, 0.03]} />
              <meshStandardMaterial color="#34495E" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Left pan - cao hơn (V - nhỏ) */}
            <mesh position={[-0.15, 0.06, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.015, 16]} />
              <meshStandardMaterial color="#3498DB" metalness={0.5} roughness={0.4} />
            </mesh>
            {/* Right pan - thấp hơn (M - lớn) */}
            <mesh position={[0.15, 0.0, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.015, 16]} />
              <meshStandardMaterial color="#E74C3C" metalness={0.5} roughness={0.4} />
            </mesh>
          </group>
        );
      
      default:
        return null;
    }
  };

  return (
    <group ref={bookmarkRef} position={[1.0, 1.15, 0]}>
      {/* Ribbon/string của bookmark - thả xuống từ đỉnh sổ */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[0.025, 1.8, 0.008]} />
        <meshStandardMaterial color="#C0392B" roughness={0.6} metalness={0.3} />
      </mesh>
      
      {/* Charm 3D tại đầu bookmark - vị trí thấp hơn */}
      <group position={[0, -1.7, 0]}>
        {renderCharm()}
      </group>
    </group>
  );
};

export default Bookmark3D;
