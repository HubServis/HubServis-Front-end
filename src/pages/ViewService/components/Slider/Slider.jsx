import React from "react";
import imgExemple from "../../../../assets/image-exemple.svg";
import { Circle } from "@phosphor-icons/react";
import { strong_green, light_green } from "../../../../style/global-colors";

const Slider = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<img src={imgExemple} alt="image service" className="w-full object-cover"/>
				<div className="flex gap-1 mt-4">
					<i className="cursor-pointer">
						<Circle size={15} color={strong_green} weight="fill" />
					</i>
					<i className="cursor-pointer">
						<Circle size={15} color={light_green} weight="fill" />
					</i>
					<i className="cursor-pointer">
						<Circle size={15} color={light_green} weight="fill" />
					</i>
				</div>
			</div>
		</>
	);
};

export default Slider;
