import { useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import images from "../js/images";

export default function TextureSelector() {
    const [activeTexture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture,
    ]);

    const [visible, setVisible] = useState(false);

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
        redWool,
        pinkWool,
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
        const textures = {
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
            redWool,
            pinkWool,
            whiteWool,
            yellowWool,
            blackGlass,
            cyanGlass,
            blueGlass,
            grayGlass,
            blockWheel,
            spiralWheel,
        };
        const pressedTexture = Object.entries(textures).find(([k, v]) => v);
        if (pressedTexture) {
            setTexture(pressedTexture[0]);
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
        redWool,
        pinkWool,
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

    return (
        <div
            className={
                visible
                    ? "absolute corner selector selector-shown"
                    : "absolute corner selector"
            }
        >
            <h1 className="texture-header">Textures</h1>
            <div className="texture-grid">
                {Object.entries(images).map(([key, src]) => {
                    if (key !== "ironBlock") {
                        return (
                            <div className="texture-div" key={key}>
                                <img
                                    src={src}
                                    className={`${
                                        key === activeTexture
                                            ? "texture-image active"
                                            : "texture-image inactive"
                                    }`}
                                    alt={key}
                                />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}
