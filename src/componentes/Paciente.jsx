import React from "react";

const Paciente = ({ paciente }) => {
	const { nombre, propietario, email, fecha, sintomas } = paciente;
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
			</div>
		</>
	);
};

export default Paciente;
