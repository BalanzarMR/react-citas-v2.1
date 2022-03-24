import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente }) => {
	return (
		<div className=" md:w-1/2 lg:w-3/5">
			{pacientes && pacientes.length ? (
				<>
					<h2 className=" font-black text-3xl text-center">
						Listado de pacientes{" "}
					</h2>
					<p className=" text-xl mt-5 text-center">
						Administra tus{" "}
						<span className=" text-indigo-600 font-bold">
							Pacientes y citas
						</span>
					</p>
					<div className=" h-screen overflow-y-scroll">
						{pacientes.map((paciente) => {
							return (
								<Paciente
									paciente={paciente}
									setPaciente={setPaciente}
									key={paciente.id}
								/>
							);
						})}
					</div>
				</>
			) : (
				<>
					<h2 className=" font-black text-3xl text-center">
						No hay pacientes{" "}
					</h2>
					<p className=" text-xl mt-5 text-center">
						Empieza a gregar{" "}
						<span className=" text-indigo-600 font-bold">
							y apareceran aqui
						</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ListadoPacientes;
