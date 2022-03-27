import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente;

	const handleEliminar = () => {
		Swal.fire({
			title: "Estás seguro de eliminar?",
			text: "No podras revertir esta acción!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, eliminalo!",
		}).then((result) => {
			if (result.isConfirmed) {
				eliminarPaciente(id); //llamar el prop y enviar el id
				Swal.fire("Eliminado!", "Tu cita se ha eliminado.", "success");
			}
		});
	};

	return (
		<>
			<div className="p-3 px-3 mx-4 mb-5 bg-white rounded-lg">
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Nombre: <span className=" font-normal normal-case">{nombre} </span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Propietario:{" "}
					<span className=" font-normal normal-case">{propietario} </span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Email: <span className=" font-normal normal-case">{email}</span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Alta: <span className=" font-normal normal-case">{fecha}</span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Sintomas:{" "}
					<span className=" font-normal normal-case text-justify">
						{sintomas}
					</span>
				</p>

				<div className="flex justify-between mt-5">
					<button
						type="button"
						className=" bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-800 uppercase"
						onClick={() => setPaciente(paciente)}
					>
						Editar
					</button>
					<button
						type="button"
						className=" bg-red-700 text-white px-4 rounded-lg hover:bg-red-800 uppercase"
						onClick={handleEliminar}
					>
						Eliminar
					</button>
				</div>
			</div>
		</>
	);
};

export default Paciente;
