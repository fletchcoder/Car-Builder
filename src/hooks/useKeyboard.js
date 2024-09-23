import { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
    const keyActionMap = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "blackWool",
        Digit2: "blueWool",
        Digit3: "brownWool",
        Digit4: "cyanWool",
        Digit5: "grayWool",
        Digit6: "greenWool",
        Digit7: "lightBlueWool",
        Digit8: "lightGrayWool",
        Digit9: "limeWool",
        Digit0: "magentaWool",
        KeyR: "orangeWool",
        KeyT: "pinkWool",
        KeyY: "redWool",
        KeyU: "whiteWool",
        KeyI: "yellowWool",
        KeyO: "blackGlass",
        KeyP: "cyanGlass",
        KeyH: "blueGlass",
        KeyJ: "grayGlass",
        KeyK: "blockWheel",
        KeyL: "spiralWheel",
    };

    return keyActionMap[key];
}

export default function useKeyboard() {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        blackWool: false,
        blueWool: false,
        brownWool: false,
        cyanWool: false,
        grayWool: false,
        greenWool: false,
        lightBlueWool: false,
        lightGrayWool: false,
        limeWool: false,
        magentaWool: false,
        orangeWool: false,
        redWool: false,
        pinkWool: false,
        whiteWool: false,
        yellowWool: false,
        blackGlass: false,
        cyanGlass: false,
        blueGlass: false,
        grayGlass: false,
        blockWheel: false,
        spiralWheel: false,
    });

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code);

        if (action) {
            setActions((prev) => {
                return {
                    ...prev,
                    [action]: false,
                };
            });
        }
    }, []);

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code);

        if (action) {
            setActions((prev) => {
                return {
                    ...prev,
                    [action]: true,
                };
            });
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keyup", handleKeyUp);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown, handleKeyUp]);

    return actions;
}
