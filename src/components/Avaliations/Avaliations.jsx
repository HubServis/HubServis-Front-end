import React from "react";
import { Star } from "@phosphor-icons/react";
import './Style.css';

const Avaliations = () => {
	return (
		<span className="container-avaliations">
			<Star size={16} color="#00E125" weight="fill"/>
			<Star size={16} color="#00E125" weight="fill"/>
			<Star size={16} color="#00E125" weight="fill"/>
			<Star size={16} color="#97FFA8"/>
			<Star size={16} color="#97FFA8"/>
		</span>
	);
};

export default Avaliations;
