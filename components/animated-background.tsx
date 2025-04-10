"use client"

import { useRef } from "react"
import * as THREE from "three"
import { useFrame, Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useThree } from "@react-three/fiber"
import { createNoise3D } from "simplex-noise"

// simplex-noiseを初期化
const noise3D = createNoise3D()

function PointCloud() {
  const points = useRef()
  const { viewport } = useThree()

  // パーティクルの数を増やす
  const count = 5000

  // パーティクルの位置を初期化（球状に配置）
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3

    // 球面座標を使用
    const radius = 10 * Math.cbrt(Math.random()) // 均一な分布のための立方根
    const theta = Math.random() * Math.PI * 2 // 0～2π
    const phi = Math.acos(2 * Math.random() - 1) // 0～π

    // 球面座標からデカルト座標に変換
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)

    sizes[i] = Math.random() * 0.3 + 0.1
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.1

    if (points.current) {
      const positions = points.current.geometry.attributes.position.array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        const z = positions[i3 + 2]

        // パーリンノイズを使用して位置を更新
        positions[i3] += noise3D(x * 0.01, y * 0.01, time) * 0.01
        positions[i3 + 1] += noise3D(y * 0.01, z * 0.01, time) * 0.01
        positions[i3 + 2] += noise3D(z * 0.01, x * 0.01, time) * 0.01
      }

      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        transparent
        color="#555555"
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function WireframeTerrain() {
  const mesh = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.2

    if (mesh.current) {
      const position = mesh.current.geometry.attributes.position
      const vertex = new THREE.Vector3()

      for (let i = 0; i < position.count; i++) {
        vertex.fromBufferAttribute(position, i)

        const distance = vertex.length()
        const noiseValue = noise3D(vertex.x * 0.05, vertex.y * 0.05, time) * 0.5

        vertex.z = noiseValue * Math.sin(distance - time)

        position.setXYZ(i, vertex.x, vertex.y, vertex.z)
      }

      position.needsUpdate = true
    }
  })

  // 複数のワイヤーフレームを空間全体に配置
  return (
    <>
      {/* 下部のワイヤーフレーム */}
      <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[20, 20, 64, 64]} />
        <meshBasicMaterial color="#777777" wireframe transparent opacity={0.15} />
      </mesh>

      {/* 上部のワイヤーフレーム */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshBasicMaterial color="#777777" wireframe transparent opacity={0.1} />
      </mesh>

      {/* 左側のワイヤーフレーム */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-4, 0, 0]}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshBasicMaterial color="#777777" wireframe transparent opacity={0.1} />
      </mesh>

      {/* 右側のワイヤーフレーム */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[4, 0, 0]}>
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshBasicMaterial color="#777777" wireframe transparent opacity={0.1} />
      </mesh>
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <PointCloud />
      <WireframeTerrain />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={0.1} />
      </EffectComposer>
    </>
  )
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 bg-white">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
    </div>
  )
}
