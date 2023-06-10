import React from "react";
import imgExemple from "../../../../assets/image-exemple.svg";

const ImageSelector = () => {
	return (
		<>
			<section className="flex justify-between">
				<div className="group inline-flex flex-col items-center">
					<img
						src={imgExemple}
						alt="image preview"
						className="max-w-[80px] h-[80px] transition-all object-cover group-hover:border-2 group-hover:border-solid group-hover:border-[var(--light-green)] rounded-lg"
					/>
					<p className="text-xl mt-[14px]">R$ 49,90</p>
				</div>
				<div className="group inline-flex flex-col items-center">
					<img
						src={imgExemple}
						alt="image preview"
						className="max-w-[80px] h-[80px] transition-all object-cover group-hover:border-2 group-hover:border-solid group-hover:border-[var(--light-green)] rounded-lg"
					/>
					<p className="text-xl mt-[14px]">R$ 49,90</p>
				</div>
				<div className="group inline-flex flex-col items-center">
					<img
						src={imgExemple}
						alt="image preview"
						className="max-w-[80px] h-[80px] transition-all object-cover group-hover:border-2 group-hover:border-solid group-hover:border-[var(--light-green)] rounded-lg"
					/>
					<p className="text-xl mt-[14px]">R$ 49,90</p>
				</div>
			</section>
		</>
	);
};

export default ImageSelector;
