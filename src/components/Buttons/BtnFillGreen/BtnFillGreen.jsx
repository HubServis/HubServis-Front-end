import React from "react";
import "./Styles.css";

/* @params
/* width = "full" / full -> espaço disponivel, se não passar ficará "original"
*/

const BtnFillGreen = ({ children, onclick = () => {},width }) => {
	if (width == "full") {
		return (
			<>
				<button
					className="btn-fill-green w-full"
					onClick={() => onclick()}
				>
					{children}
				</button>
			</>
		);
	}

	return (
		<>
			<button className="btn-fill-green" onClick={() => onclick()}>
				{children}
			</button>
		</>
	);
};

export default BtnFillGreen;
