import React from "react";
import { Star } from "@phosphor-icons/react";
import './Style.css';

/* @ params
** size -> define o tamanho dos icones
*/

const Avaliations = ({size}) => {
	return (
		<span className="container-avaliations flex">
			<Star className="cursor-pointer" size={size ?? 16} color="#00E125" weight="fill"/>
			<Star className="cursor-pointer" size={size ?? 16} color="#00E125" weight="fill"/>
			<Star className="cursor-pointer" size={size ?? 16} color="#00E125" weight="fill"/>
			<Star className="cursor-pointer" size={size ?? 16} color="#97FFA8"/>
			<Star className="cursor-pointer" size={size ?? 16} color="#97FFA8"/>
		</span>
	);
};

export default Avaliations;
