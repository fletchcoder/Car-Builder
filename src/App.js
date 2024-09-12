import { useState } from "react";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Ground from "./components/Ground";
import Player from "./components/Player";
import Cubes from "./components/Cubes";
import FirstPersonView from "./components/FirstPersonView";
import TextureSelector from "./components/TextureSelector";

export default function App() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Canvas>
                <Sky sunPosition={[40, 5, 50]} />
                <ambientLight intensity={3} />
                <FirstPersonView />
                <Physics>
                    <Player />
                    <Cubes />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="cursor absolute centered">+</div>
            <TextureSelector />
        </>
    );
}
