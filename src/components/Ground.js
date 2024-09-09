import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../js/textures";
import { RepeatWrapping } from "three";
import useStore from "../hooks/useStore";

export default function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    const [addCube] = useStore((state) => [state.addCube]);

    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return (
        <mesh
            ref={ref}
            onClick={(e) => {
                e.stopPropagation();
                const [x, y, z] = Object.values(e.point).map((value) =>
                    Math.ceil(value)
                );
                addCube(x, y, z);
            }}
        >
            <planeGeometry attach={"geometry"} args={[100, 100]} />
            <meshStandardMaterial attach={"material"} map={groundTexture} />
        </mesh>
    );
}
