import React from "react";

const ListadoPacientes = () => {
	return (
		<div className=" md:w-1/2 lg:w-3/5">
			<h2 className=" font-black text-3xl text-center">
				Listado de pacientes{" "}
			</h2>
			<p className=" text-xl mt-5 text-center">
				Administra tus{" "}
				<span className=" text-indigo-600 font-bold">Pacientes y citas</span>
			</p>
			<div className="p-3 px-3 mx-4 bg-white rounded-lg">
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Nombre: <span className=" font-normal normal-case">Takito</span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Propietario: <span className=" font-normal normal-case">Cosi ♥️</span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Email: <span className=" font-normal normal-case">cosi@uluk.com</span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Alta: <span className=" font-normal normal-case">21/03/2022</span>
				</p>
				<p className=" font-bold mb-3 text-gray-700 uppercase">
					Sintomas: <span className=" font-normal normal-case">Sintomas</span>
				</p>
			</div>
		</div>
	);
};

export default ListadoPacientes;
