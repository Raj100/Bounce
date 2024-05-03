"use client";
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/standing.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    for (const actionKey in actions) {
      if (Object.hasOwnProperty.call(actions, actionKey)) {
        actions[actionKey].play();
      }
    }
  }, [actions]);
  return (
    <group ref={group} {...props}dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig1Hips} />
          <skinnedMesh name="Ch29" geometry={nodes.Ch29.geometry} material={materials.Ch29_Body} skeleton={nodes.Ch29.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/standing.glb')
