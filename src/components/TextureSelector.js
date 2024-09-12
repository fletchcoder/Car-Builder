import { useState } from "react";
import useStore from "../hooks/useStore";
import images from "../js/images";

export default function TextureSelector({ onClick }) {
    const [activeTexture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture,
    ]);

    const [visible, setVisible] = useState(false);

    function setCurrentTexture(texture) {
        setTexture(texture);
    }

    return (
        <div
            className={
                visible
                    ? "absolute corner selector selector-shown"
                    : "absolute corner selector selector-hidden"
            }
        >
            <h1 className="texture-header">Textures</h1>
            {Object.entries(images).map(([key, src]) => {
                return (
                    <img
                        key={key}
                        src={src}
                        className={`${key === activeTexture && "active"}`}
                        alt={key}
                    />
                );
            })}
        </div>
    );
}
