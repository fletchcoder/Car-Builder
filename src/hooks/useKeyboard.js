import { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
    const keyActionMap = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
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
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
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
