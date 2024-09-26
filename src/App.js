import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Ground from "./components/Ground";
import Player from "./components/Player";
import Cubes from "./components/Cubes";
import FirstPersonView from "./components/FirstPersonView";
import Cursor from "./components/Cursor";
import TextureSelector from "./components/TextureSelector";
import Tutorial from "./components/Tutorial";
import Menu from "./components/Menu";

export default function App() {
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
            <Cursor />
            <TextureSelector />
            <Tutorial />
            <Menu />
        </>
    );
}
