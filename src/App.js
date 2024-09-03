import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Ground from "./components/Ground";
import "./styles/App.css";

function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[80, 80, 100]} />
                <ambientLight intensity={0.5} />
                <Physics>
                    <Ground />
                </Physics>
            </Canvas>
        </>
    );
}

export default App;
