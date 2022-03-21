import React from "react";

const Paciente = () => {
	return (
		<>
			<div className="p-3 px-3 mx-4 mb-5 bg-white rounded-lg">
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
					Sintomas:{" "}
					<span className=" font-normal normal-case text-justify">
						Culpa excepteur quis laborum adipisicing ullamco cillum dolore
						dolore aliqua eu aliqua sunt. Ipsum fugiat qui labore consequat
						labore do esse incididunt aliqua nisi aute sunt. Magna ut tempor
						nostrud id. Sit aute consequat Lorem labore culpa do est aute
						officia elit laborum.
					</span>
				</p>
			</div>
		</>
	);
};

export default Paciente;
