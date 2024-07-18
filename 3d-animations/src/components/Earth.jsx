import { OrbitControls, ScrollControls, useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react";

const Earth = () => {

const ref= useRef(); 
const {scene,animations,nodes,materials} = useGLTF('/models/Earth/scene.gltf');
const {actions} = useAnimations(animations,scene);

const scroll = useScroll();
useEffect(()=>{
    actions["Object_0"].play().timeScale=0.5;
    // actions['Object_0'].play().setDuration(10);
    console.log(actions);
},[actions,scroll])


useFrame(()=>{
    // actions["Object_0"].time = actions["Object_0"].getClip().duration * scroll.offset/3 ;
})

return (
<group ref={ref} scale={2} >
    <primitive object={scene}/>
</group>
)}

const EarthCanvas = ()=>{
return(
<Canvas>
    {/* <OrbitControls/> */}
    <ScrollControls damping={0.3} pages={2}>

    <Earth/>
    </ScrollControls>
</Canvas>
)}
export default EarthCanvas
