import { useState } from "react";

export default function Tutorial() {
    const [visible, setVisible] = useState(true);

    function closeTutorial() {
        setVisible(false);
    }

    return (
        <>
            <div
                className={
                    visible ? "tutorial-div absolute centered" : "no-display"
                }
            >
                <h1>Welcome to Car Builder!</h1>
                <p>
                    Car Builder is a game that allows you to build your dream
                    car using 3D blocks. You can save your world to come back to
                    it later, or reset the world entirely if you want to start
                    over.
                </p>
                <h2>Movement</h2>
                <p>W, A, S, D</p>
                <h2>Change Textures</h2>
                <p>
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, R, T, Y, U, I, O, P, H, J, K,
                    L
                </p>
                <button onClick={closeTutorial}>OK</button>
            </div>
        </>
    );
}
