import { useState, useEffect } from "react";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";

export default function TextureSelector() {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture,
    ]);
    const {
        blackWool,
        blueWool,
        brownWool,
        cyanWool,
        grayWool,
        greenWool,
        lightBlueWool,
        lightGrayWool,
        limeWool,
        magentaWool,
        orangeWool,
        whiteWool,
        yellowWool,
        blackGlass,
        cyanGlass,
        blueGlass,
        grayGlass,
        blockWheel,
        spiralWheel,
    } = useKeyboard();

    useEffect(() => {
        const pressedTexture = [
            blackWool,
            blueWool,
            brownWool,
            cyanWool,
            grayWool,
            greenWool,
            lightBlueWool,
            lightGrayWool,
            limeWool,
            magentaWool,
            orangeWool,
            whiteWool,
            yellowWool,
            blackGlass,
            cyanGlass,
            blueGlass,
            grayGlass,
            blockWheel,
            spiralWheel,
        ];
        if (pressedTexture) {
            setTexture(pressedTexture);
        }
    }, [
        setTexture,
        blackWool,
        blueWool,
        brownWool,
        cyanWool,
        grayWool,
        greenWool,
        lightBlueWool,
        lightGrayWool,
        limeWool,
        magentaWool,
        orangeWool,
        whiteWool,
        yellowWool,
        blackGlass,
        cyanGlass,
        blueGlass,
        grayGlass,
        blockWheel,
        spiralWheel,
    ]);

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false);
        }, 2000);
        setVisible(true);

        return () => {
            clearTimeout(visibilityTimeout);
        };
    }, [activeTexture]);

    return visible && <div className="absolute centered">Texture</div>;
}
