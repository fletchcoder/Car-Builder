import { useState } from "react";
import useStore from "../hooks/useStore";

export default function Menu() {
    const [resetWorld] = useStore((state) => [state.resetWorld]);

    const [menuVisible, setMenuVisible] = useState(false);

    const [resetVisible, setResetVisible] = useState(false);

    function openMenu() {
        setMenuVisible(true);
    }

    function closeMenu() {
        setMenuVisible(false);
        setResetVisible(false);
    }

    function openReset() {
        setResetVisible(true);
    }

    function closeReset() {
        setResetVisible(false);
    }

    function resetCubes() {
        resetWorld();
        setMenuVisible(false);
        setResetVisible(false);
    }

    return (
        <>
            <div className="menu-div absolute top-corner" onClick={openMenu}>
                Menu
            </div>
            <div
                className={
                    menuVisible ? "options-div absolute centered" : "no-display"
                }
            >
                <button className="pointer close-button" onClick={closeMenu}>
                    X
                </button>
                <h2>Options</h2>
                <button className="pointer reset-button" onClick={openReset}>
                    Reset World
                </button>
                <div
                    className={resetVisible ? "confirmation-div" : "no-display"}
                >
                    <h3>Are you sure?</h3>
                    <div className="conf-button-div">
                        <button className="pointer" onClick={resetCubes}>
                            &#10003;
                        </button>
                        <button className="pointer" onClick={closeReset}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
