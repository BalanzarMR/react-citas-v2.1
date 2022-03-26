import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente }) => {
	const [nombre, setNombre] = useState(" ");
	const [propietario, setPropietario] = useState(" ");
	const [email, setEmail] = useState(" ");
	const [fecha, setFecha] = useState(" ");
	const [sintomas, setSintomas] = useState(" ");
	const [error, setError] = useState(false);

	useEffect(() => {
		// con la condiconal vefificamos que el objeto este vacio o lleno
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const generarId = () => {
			const random = Math.random().toString(36).substring(2);
			const date = Date.now().toString(36);

			return random + date;
		};

		if ([nombre, propietario, email, fecha, sintomas].includes(" ")) {
			setError(true);
			return;
		}
		setError(false);
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
			id: generarId(),
		};

		setPacientes([...pacientes, objetoPaciente]);

		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
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
				{error && <Error mensaje={<p>Todos los campos son obligatorios</p>} />}
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
						placeholder="Nombre de la mascota"
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
					value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
				/>
			</form>
		</div>
	);
};

export default Formulario;
