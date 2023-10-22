import React from "react";
import imgNotFound from "../../assets/NotFound/not-found.svg";
import { BtnFillGreen } from "../../components";
import { useNavigate } from "react-router-dom";

const NotFound = ({
	msg = null,
	backToBtn = false,
	backToUrl = "/",
	backToPage = "Home",
}) => {
	const navigate = useNavigate();

	if (!msg)
		return (
			<>
				<img
					src={imgNotFound}
					alt="Not Found Ilustration"
					className="max-w-2xl m-auto"
				/>

				<h2 className="text-center font-bold text-2xl mb-3">Page Not Found!</h2>
				{backToBtn && (
					<div className="text-center">
						<BtnFillGreen onclick={() => navigate(backToUrl)}>
							Voltar para {backToPage}
						</BtnFillGreen>
					</div>
				)}
			</>
		);

	return (
		<>
			<img
				src={imgNotFound}
				alt="Not Found Ilustration"
				className="max-w-2xl m-auto"
			/>
			<h2 className="text-center font-bold text-2xl mb-3">{msg}</h2>
			{backToBtn && (
				<div className="text-center">
					<BtnFillGreen onclick={() => navigate(backToUrl)}>
						Voltar para {backToPage}
					</BtnFillGreen>
				</div>
			)}
		</>
	);
};

export default NotFound;
