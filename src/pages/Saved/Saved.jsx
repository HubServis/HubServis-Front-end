import React, { useEffect, useRef, useState } from "react";
import { AppBar, BtnFillGreen } from "../../components";
import CardSavedService from "./components/SavedCardService";
import { api } from "../../services/api";
import { Toast } from "primereact/toast";

const Saved = () => {
	const [servicesSaved2, setServicesSaved2] = useState([]);
	const [checkedList, setCheckedList] = useState([]);
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const [servicesSavedStorageAPI, setServicesSavedStorageAPI] = useState(
		JSON.parse(localStorage.getItem("savedServices"))
	);
	const toast = useRef(null);

	const fetchData = async () => {
		try {
			const response = await api.post("http://localhost:3000/services/many", {
				servicesId: servicesSavedStorageAPI,
			});

			setServicesSaved2(response.data);
			setIsFetching(false);
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		servicesSavedStorageAPI?.length > 0 && fetchData();
	}, []);

	const showError = ({ msg }) => {
		toast.current?.show({
			severity: "error",
			summary: "Erro",
			detail: msg,
			life: 3000,
		});
	};

	const showInfo = ({ msg }) => {
		toast.current.show({
			severity: "info",
			summary: "Lista Atualizada",
			detail: msg,
			life: 3000,
		});
	};

	const onRemoveServicesToSaved = () => {
		const servicesStorage = JSON.parse(localStorage.getItem("savedServices"));

		if (servicesStorage?.length > 0) {
			localStorage.setItem(
				"savedServices",
				JSON.stringify(
					servicesStorage.filter((id) => !checkedList.includes(id))
				)
			);

			setServicesSaved2(
				servicesSaved2.filter((service) => !checkedList.includes(service?.id))
			);

			setCheckedList([]);

			showInfo({ msg: "Sua lista de favoritos foi atualizada!" });
		}
	};

	return (
		<>
			<AppBar>
				<a href="/">Home</a>
				<a href="/services">Serviços</a>
				<a href="/about">Sobre</a>
			</AppBar>
			<main className="max-w-[1440px] m-auto">
				<Toast ref={toast} />

				{checkedList?.length > 0 && (
					<BtnFillGreen onclick={() => onRemoveServicesToSaved()}>
						Remover favoritos
					</BtnFillGreen>
				)}

				<div className="text-center my-8">
					{errorHandling(error, servicesSaved2, showError, isFetching)}
				</div>

				{isFetching && !error && servicesSavedStorageAPI?.length > 0 && (
					<p className="text-center my-8 font-bold">Carregando...</p>
				)}
				<section
					className={`flex flex-wrap w-full ${
						servicesSaved2?.length > 4 && "justify-between"
					}`}
				>
					{servicesSaved2 &&
						servicesSaved2?.map((service, index) => (
							<CardSavedService
								key={index}
								id={service?.id}
								serviceName={service?.name}
								price={service?.price}
								rating={service?.averageRating}
								businessName={service?.business?.name}
								// onChecked={(id) => onChecked(id)}
								setCheckedList={setCheckedList}
								checkedList={checkedList}
							/>
						))}
				</section>
			</main>
		</>
	);
};

export default Saved;

const errorHandling = (
	error = null,
	servicesSavedLS = [],
	showError,
) => {
	if (!servicesSavedLS.length > 0) {
		return (
			<>
				<h2 className="font-bold text-2xl">
					Sua lista de favoritos está vazia!
				</h2>
				<p>Dê vida a ela favoritando serviços</p>
			</>
		);
	}

	if (error?.response?.status == 404) {
		showError({ msg: "Não há serviços salvos!" });
		return <h2>Services not found!</h2>;
	}

	if (error) {
		showError({
			msg: "Ocorreu algo inesperado. Contate nosso suporte caso continue.",
		});
		return (
			<h2>
				Ocorreu um erro inesperado, tente novamente mais tarde ou contate nosso
				suporte.
			</h2>
		);
	}
};
