/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: any;
    Rectangle_2: THREE.Mesh;
    Rectangle_2_1: THREE.Mesh;
    Shape: THREE.Mesh;
    Shape_2: THREE.Mesh;
  };
  materials: {};
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/eye.gltf") as GLTFResult;
  const [rot, setRot] = useState(new THREE.Euler(0, 0, 0));

  useFrame(() => {
    setRot(new THREE.Euler(rot.x + 0.03, rot.y + 0.03, rot.z))
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group  scale={[1.68, 1.68, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape.geometry}
            material={nodes.Shape.material}
            position={[-184.4, 0.2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_2.geometry}
            material={nodes.Shape_2.material}
            position={[178.8, -105.8, 0]}
            rotation={[0, 0, -Math.PI]}
          />
        </group>
        <lineSegments
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          rotation={rot}
          // position={[-110, 55, 9]}
        />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-95.212, 66.872, 1000]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/eye.gltf");