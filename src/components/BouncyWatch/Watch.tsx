import { Html, useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef, VFC } from "react";
import { Group } from "three";
import { GLTFResult } from "types";

type Props = {} & GroupProps;

const Watch: VFC<Props> = ({ ...props }) => {
  const ref = useRef<Group>();
  const { nodes, materials } = useGLTF('/models/watch-v1.glb') as GLTFResult;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
      ref.current.rotation.y = Math.sin(t / 4) / 8;
      ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      {nodes && materials && (
        <>
          <mesh
            geometry={nodes.Object005_glass_0.geometry}
            material={materials.glass}>
            <Html
              scale={100}
              rotation={[Math.PI / 2, 0, 0]}
              position={[180, -350, 50]}
              transform
              occlude>
              <div className="annotation">
                6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
              </div>
            </Html>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object006_watch_0.geometry}
            material={materials.watch}
          />
        </>
      )}
    </group>
  );
}

export default Watch