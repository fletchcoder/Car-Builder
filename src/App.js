import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import "./styles/App.css";

function App() {
	return (
		<>
			<div className="App">Canvas</div>
			<Canvas>
				<Sky></Sky>
			</Canvas>
		</>
	);
}

export default App;
