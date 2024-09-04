import { usePlane } from "@react-three/cannon";
import textures from "../js/textures";
import { NearestFilter, RepeatWrapping } from "three";

export default function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    }));

    const groundTexture = textures.groundTexture;
    groundTexture.magFilter = NearestFilter;
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref}>
            <planeGeometry attach={"geometry"} args={[100, 100]} />
            <meshStandardMaterial attach={"material"} map={groundTexture} />
        </mesh>
    );
}
