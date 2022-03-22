import React from "react";
import { useState } from "react";

const Formulario = () => {
	const [nombre, setNombre] = useState(" ");
	const [propietario, setPropietario] = useState(" ");
	const [email, setEmail] = useState(" ");
	const [fecha, setFecha] = useState(" ");
	const [sintomas, setSintomas] = useState(" ");
	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, propietario, email, fecha, sintomas].includes(" ")) {
			console.log("Hay por lo menos un campo vacio");
		} else {
			console.log("Todos los campos estan llenos");
		}
	};
	return (
		<div className=" md:w-1/2 lg:2/5">
			<h2 className=" font-black text-3xl text-center">Seguimento Pacientes</h2>
			<p className=" text-lg mt-5 text-center">
				Añade Pacientes{" "}
				<span className=" text-indigo-600 font-bold">y Adminstralos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className=" bg-white shadow-md rounded-lg p-3 px-3 mx-4"
			>
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
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
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
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
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
						value={sintomas}
						onChange={(e) => {
							setSintomas(e.target.value);
						}}
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
