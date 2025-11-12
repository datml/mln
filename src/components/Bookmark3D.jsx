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
      
      case 5: // Mặt nạ/Bóng người (Bài bạ hàng hóa)
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Mask/Shadow figure */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.15, 0.2, 0.03]} />
              <meshStandardMaterial color="#1C1C1C" metalness={0.3} roughness={0.7} />
            </mesh>
            {/* Eyes holes */}
            <mesh position={[-0.04, 0.04, 0.02]}>
              <sphereGeometry args={[0.02, 16, 16]} />
              <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.04, 0.04, 0.02]}>
              <sphereGeometry args={[0.02, 16, 16]} />
              <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
            </mesh>
            {/* Chains/fetters symbol */}
            <mesh position={[0, -0.12, 0]} rotation={[0, 0, Math.PI / 4]}>
              <torusGeometry args={[0.04, 0.01, 8, 16]} />
              <meshStandardMaterial color="#708090" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      
      case 6: // Kim tự tháp/Bong bóng (Tích lũy & bất bình đẳng)
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Bubble on top (luxury) */}
            <mesh position={[0, 0.08, 0]}>
              <sphereGeometry args={[0.08, 32, 32]} />
              <meshStandardMaterial 
                color="#FFD700" 
                metalness={0.9} 
                roughness={0.1} 
                transparent={true}
                opacity={0.7}
              />
            </mesh>
            {/* Pyramid base (divided society) */}
            <mesh position={[0, -0.08, 0]} rotation={[0, 0, 0]}>
              <coneGeometry args={[0.12, 0.2, 4]} />
              <meshStandardMaterial color="#8B4513" metalness={0.4} roughness={0.6} />
            </mesh>
            {/* Division line */}
            <mesh position={[0, -0.05, 0]}>
              <boxGeometry args={[0.25, 0.01, 0.01]} />
              <meshStandardMaterial color="#E74C3C" />
            </mesh>
          </group>
        );
      
      case 7: // Dòng chảy hai ngả (Tích lũy vs Tiêu dùng)
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Main flow source */}
            <mesh position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
              <meshStandardMaterial color="#27AE60" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Left arrow - Consumption (luxury) */}
            <mesh position={[-0.08, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <coneGeometry args={[0.04, 0.12, 8]} />
              <meshStandardMaterial color="#E67E22" metalness={0.5} roughness={0.4} />
            </mesh>
            {/* Right arrow - Accumulation (factory) */}
            <mesh position={[0.08, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <coneGeometry args={[0.04, 0.12, 8]} />
              <meshStandardMaterial color="#3498DB" metalness={0.5} roughness={0.4} />
            </mesh>
            {/* Split symbol */}
            <mesh position={[0, 0.05, 0]}>
              <boxGeometry args={[0.2, 0.01, 0.01]} />
              <meshStandardMaterial color="#F39C12" />
            </mesh>
          </group>
        );
      
      case 8: // Cuộc đua nhà máy (GTTD Siêu ngạch)
        return (
          <group ref={charmRef} position={[0, 0, 0]}>
            {/* Leading factory (modern, efficient) */}
            <mesh position={[0.08, 0, 0]}>
              <boxGeometry args={[0.08, 0.12, 0.08]} />
              <meshStandardMaterial color="#2ECC71" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Lightning bolt (technology advantage) */}
            <mesh position={[0.08, 0.08, 0]}>
              <coneGeometry args={[0.03, 0.06, 3]} />
              <meshStandardMaterial color="#F1C40F" emissive="#F1C40F" emissiveIntensity={0.5} />
            </mesh>
            {/* Lagging factories (smaller, darker) */}
            <mesh position={[-0.06, -0.02, 0]}>
              <boxGeometry args={[0.06, 0.09, 0.06]} />
              <meshStandardMaterial color="#7F8C8D" metalness={0.4} roughness={0.6} />
            </mesh>
            <mesh position={[-0.06, -0.02, -0.08]}>
              <boxGeometry args={[0.05, 0.07, 0.05]} />
              <meshStandardMaterial color="#95A5A6" metalness={0.3} roughness={0.7} />
            </mesh>
            {/* Profit overflow from leader */}
            <mesh position={[0.15, 0.02, 0]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshStandardMaterial 
                color="#27AE60" 
                metalness={0.9} 
                roughness={0.1}
                emissive="#27AE60"
                emissiveIntensity={0.3}
              />
            </mesh>
          </group>
        );
      
      default:
        return null;
    }
  };

  return (
    <group ref={bookmarkRef} position={[1.0, 1.15, 0]}>
      {/* Ribbon/string của bookmark - thả xuống từ đỉnh sổ, bên cạnh */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[0.025, 1.8, 0.008]} />
        <meshStandardMaterial color="#C0392B" roughness={0.6} metalness={0.3} />
      </mesh>
      
      {/* Charm 3D tại đầu bookmark - vị trí thấp hơn, bên cạnh sổ */}
      <group position={[0, -1.7, 0]}>
        {renderCharm()}
      </group>
    </group>
  );
};

export default Bookmark3D;
