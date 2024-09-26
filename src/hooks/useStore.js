import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { data } from "../js/data";

const useStore = create(
    persist(
        (set) => ({
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
                            JSON.stringify(cube.position) !==
                            JSON.stringify([x, y, z])
                    ),
                }));
            },
            setTexture: (texture) => {
                set(() => ({
                    texture,
                }));
            },
            resetWorld: () => {
                set(() => ({
                    cubes: [],
                }));
            },
        }),
        {
            name: "cubes",
        }
    )
);

export default useStore;
