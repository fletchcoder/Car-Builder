import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Ground from "./components/Ground";
import Player from "./components/Player";
import Cubes from "./components/Cubes";
import FirstPersonView from "./components/FirstPersonView";

export default function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[40, 5, 10]} />
                <ambientLight intensity={0.5} />
                <FirstPersonView />
                <Physics>
                    <Player />
                    <Cubes />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="cursor">+</div>
        </>
    );
}
