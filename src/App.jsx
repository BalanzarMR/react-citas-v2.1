import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPacientes from "./componentes/ListadoPacientes";

function App() {
	return (
		<div className=" container mx-auto mt-20">
			<Header />
			<Formulario />
			<ListadoPacientes />
		</div>
	);
}

export default App;
