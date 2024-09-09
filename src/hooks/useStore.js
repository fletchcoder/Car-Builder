import { create } from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
    texture: "blackWool",
    cubes: [],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    position: [x, y, z],
                    texture: prev.texture,
                },
            ],
        }));
    },
    removeCube: (x, y, z) => {
        set((prev) => ({
            cubes: prev.cubes.filter(
                (cube) =>
                    JSON.stringify(cube.position) !== JSON.stringify([x, y, z])
            ),
        }));
    },
    setTexture: (texture) => {
        set(() => ({
            texture,
        }));
    },
    saveWorld: () => {},
    resetWorld: () => {},
}));

export default useStore;
