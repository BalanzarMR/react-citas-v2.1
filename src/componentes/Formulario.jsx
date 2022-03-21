import React from "react";

const Formulario = () => {
	return (
		<div className=" md:w-1/2 lg:2/5">
			<h2 className=" font-black text-3xl text-center">Seguimento Pacientes</h2>
			<p className=" text-lg mt-5 text-center">
				Añade Pacientes{" "}
				<span className=" text-indigo-600 font-bold">y Adminstralos</span>
			</p>
			<form className=" bg-white shadow-md rounded-lg p-3 px-3 ">
				<div className=" mb-2">
					<label
						htmlFor="mascota"
						className=" block text-gray-700 uppercase font-bold "
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota "
						className=" border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md "
					/>
				</div>
				<div className=" mb-2">
					<label
						htmlFor="propietario"
						className=" block text-gray-700 uppercase font-bold "
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario "
						className=" border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md "
					/>
				</div>
				<div className=" mb-2">
					<label
						htmlFor="email"
						className=" block text-gray-700 uppercase font-bold "
					>
						email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Agrega tu email "
						className=" border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md "
					/>
				</div>
				<div className=" mb-2">
					<label
						htmlFor="alta"
						className=" block text-gray-700 uppercase font-bold "
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className=" border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md "
					/>
				</div>
				<div className=" mb-2">
					<label
						htmlFor="sintomas"
						className=" block text-gray-700 uppercase font-bold "
					>
						Sintomas
					</label>
					<textarea
						id="sintomas"
						className=" w-full border-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los sintomas"
					></textarea>
				</div>
				<input
					type="submit"
					className=" bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 py-3 rounded-lg cursor-pointer transition-all mb-3"
				/>
			</form>
		</div>
	);
};

export default Formulario;
