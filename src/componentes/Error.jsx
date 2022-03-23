import React from "react";

const Error = ({ mensaje }) => {
	return (
		<div className=" bg-red-800 text-white text-center py-2 px-1 mb-3 rounded-lg uppercase font-bold">
			{mensaje}
		</div>
	);
};

export default Error;
