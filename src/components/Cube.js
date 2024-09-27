import { useBox } from "@react-three/cannon";
import useStore from "../hooks/useStore";
import * as textures from "../js/textures";

export default function Cube({ position, texture }) {
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));

    const [addCube, removeCube] = useStore((state) => [
        state.addCube,
        state.removeCube,
    ]);

    const activeTexture = textures[texture + "Texture"];

    return (
        <mesh
            ref={ref}
            onClick={(e) => {
                e.stopPropagation();
                const clickedFace = Math.floor(e.faceIndex / 2) + 1;
                const { x, y, z } = ref.current.position;

                if (e.altKey) {
                    removeCube(x, y, z);
                } else if (clickedFace === 1) {
                    addCube(x + 1, y, z);
                    return;
                } else if (clickedFace === 2) {
                    addCube(x - 1, y, z);
                    return;
                } else if (clickedFace === 3) {
                    addCube(x, y + 1, z);
                    return;
                } else if (clickedFace === 4) {
                    addCube(x, y - 1, z);
                    return;
                } else if (clickedFace === 5) {
                    addCube(x, y, z + 1);
                    return;
                } else if (clickedFace === 6) {
                    addCube(x, y, z - 1);
                    return;
                }
            }}
        >
            <boxGeometry attach={"geometry"} />
            <meshStandardMaterial
                map={activeTexture}
                attach={"material"}
                transparent="true"
                opacity={
                    texture === "cyanGlass" ||
                    texture === "blackGlass" ||
                    texture === "blueGlass" ||
                    texture === "grayGlass"
                        ? 0.7
                        : 1
                }
            />
        </mesh>
    );
}
