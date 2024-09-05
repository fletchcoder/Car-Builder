import { create } from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
    texture: "blackWool",
    cubes: [
        {
            key: nanoid(),
            position: [1, 0.5, 1],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 0.5, 1],
            texture: "magentaWool",
        },
        {
            key: nanoid(),
            position: [1, 1.5, 1],
            texture: "limeWool",
        },
    ],
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
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}));

export default useStore;
