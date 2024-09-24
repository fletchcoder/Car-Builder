import { create } from "zustand";
import { nanoid } from "nanoid";
import { data } from "../js/data";

const useStore = create((set) => ({
    texture: "blackWool",
    cubes: data,
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
    resetWorld: () => {
        set(() => ({
            cubes: [],
        }));
    },
}));

export default useStore;
