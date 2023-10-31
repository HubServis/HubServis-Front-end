import React, { useEffect, useState } from "react";
import { AppBar, BtnFillGreen } from "../../components";
import { usePost } from "../../hooks/useAxios";
import CardSavedService from "./components/SavedCardService";
import { api } from "../../services/api";

const Saved = () => {
	const [servicesSaved2, setServicesSaved2] = useState([]);
	const [checkedList, setCheckedList] = useState([]);
	const [servicesSavedStorageAPI, setServicesSavedStorageAPI] = useState(
		JSON.parse(localStorage.getItem("savedServices"))
	);

	const fetchData = async () => {
		try{
			const response = await api.post("http://localhost:3000/services/many", {
				servicesId: servicesSavedStorageAPI,
			});
			
			setServicesSaved2(response.data);
			console.log('data api simple fetch', response);
		} catch(err){
			console.log('Morreuuuuuuu! ', err)
		}
	}

	useEffect(() => {
		fetchData();
	}, []);


	console.log(checkedList);

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
		}
		
		setServicesSavedStorageAPI(JSON.parse(localStorage.getItem("savedServices")));
		setCheckedList([]);
	};

	return (
		<>
			<AppBar>
				<a href="/">Home</a>
				<a href="/services">Serviços</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			{/* {isFetching && <p>Carregando...</p>} */}
			<main className="max-w-[1440px] m-auto">
				<BtnFillGreen onclick={() => onRemoveServicesToSaved()}>
					Remover favoritos
				</BtnFillGreen>
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
			{/* <Shortly /> */}''
		</>
	);
};

export default Saved;
