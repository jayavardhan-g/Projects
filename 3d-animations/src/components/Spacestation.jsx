import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect } from "react";

const Spacestation = () => {
    const {scene,animations} = useGLTF('/models/Spacestation.glb');
    const {actions} = useAnimations(animations,scene);
    
    useEffect(()=>{
        console.log(actions);
        actions["Animation"].play();
        console.log(scene)
    },[actions])

  return (
<>
    <group>
        <primitive object={scene}/>
    </group>
</>
  )
}

const SpacestationCanvas = ()=>{
return(
    <>
        <Canvas>
            <OrbitControls/>
            <ambientLight intensity={2}/>
            <Spacestation/>
        </Canvas>
    </>
)
}

export default SpacestationCanvas

