import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Holotech = (props) => {
  const group = useRef();
  const { nodes, materials, animations,scene } = useGLTF("/models/Holotech.glb");
  const { actions } = useAnimations(animations, group);

  // useEffect(() => {
  //   actions["Armature|ArmatureAction"].play();
  //   console.log(actions);
  // }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="127802a5f24940b6aac8bbfbecc9bbbcfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_50"
                      geometry={nodes.Object_50.geometry}
                      material={materials.MAT_Hologram_Planet}
                      skeleton={nodes.Object_50.skeleton}
                    />
                    <skinnedMesh
                      name="Object_52"
                      geometry={nodes.Object_52.geometry}
                      material={materials.MAT_Hologram_Decals}
                      skeleton={nodes.Object_52.skeleton}
                    />
                    <skinnedMesh
                      name="Object_54"
                      geometry={nodes.Object_54.geometry}
                      material={materials.MAT_TechTable_Body}
                      skeleton={nodes.Object_54.skeleton}
                    />
                    <skinnedMesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials.MAT_TechTable_Detail}
                      skeleton={nodes.Object_55.skeleton}
                    />
                    <group
                      name="Object_49"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_51"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_53"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="TechTable_002_low002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="TechTable_002_low000"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="TechTable_002_low001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const HolotechCanvas = () => {
  return (
    <>
      <Canvas>
          <Holotech />

      </Canvas>
    </>
  );
};
// useGLTF.preload('/models/Holotech.glb')

export default HolotechCanvas;
