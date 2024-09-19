import { create } from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
    texture: "blackWool",
    cubes: [
        {
            key: nanoid(),
            position: [1, 0, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 1, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [0, 1, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [0, 0, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 0, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [1, 1, -4],
            texture: "spiralWheel",
        },
        {
            key: nanoid(),
            position: [2, 2, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [1, 2, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [0, 2, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [1, 1, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 1, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 1, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 1, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 1, -10],
            texture: "spiralWheel",
        },
        {
            key: nanoid(),
            position: [1, 0, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [0, 0, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [0, 1, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [0, 2, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [1, 2, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 0, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 1, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 2, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [2, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [3, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [4, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [5, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [6, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [7, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 1, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 1, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 1, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 1, -4],
            texture: "spiralWheel",
        },
        {
            key: nanoid(),
            position: [8, 2, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [7, 2, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [9, 2, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [8, 0, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [7, 1, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [7, 0, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [9, 1, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [9, 0, -4],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [8, 1, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 1, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 1, -10],
            texture: "spiralWheel",
        },
        {
            key: nanoid(),
            position: [8, 0, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [8, 2, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [7, 2, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [7, 1, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [7, 0, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [9, 2, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [9, 1, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [9, 0, -10],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [8, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [8, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [7, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [6, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [5, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [4, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [3, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [2, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 2, -5],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [1, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [2, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [3, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [4, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [5, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [6, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [7, 2, -9],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [7, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [6, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [5, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [4, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [3, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [2, 2, -7],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [7, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [6, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [5, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [4, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [3, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [2, 2, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [6, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [7, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [5, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [4, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [3, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [2, 2, -6],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [9, 1, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [10, 1, -8],
            texture: "grayGlass",
        },
        {
            key: nanoid(),
            position: [9, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -9],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -8],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -7],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -6],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -5],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [0, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [9, 3, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [9, 3, -5],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [9, 3, -6],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [9, 3, -7],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [9, 3, -8],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [9, 3, -9],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -9],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -8],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -7],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -6],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 3, -5],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [8, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [7, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [5, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [4, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [3, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [2, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [1, 3, -9],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [3, 4, -6],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [4, 4, -6],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [4, 5, -6],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [3, 4, -8],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [4, 4, -8],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [4, 5, -8],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [1, 4, -6],
            texture: "blackWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -4],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -10],
            texture: "blueWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -5],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -6],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -7],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -8],
            texture: "grayWool",
        },
        {
            key: nanoid(),
            position: [6, 4, -9],
            texture: "grayWool",
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
