import React, { useEffect, useState } from "react";
import { AppBar, BtnFillGreen } from "../../components";
import { usePost } from "../../hooks/useAxios";
import CardSavedService from "./components/SavedCardService";
import { api } from "../../services/api";

const Saved = () => {
	const [servicesSaved, setServicesSaved] = useState([]);
	const [checkedList, setCheckedList] = useState([]);
	// let servicesSavedStorage = JSON.parse(
	// 	localStorage.getItem("savedServices")
	// );
	const [servicesSavedStorage, setServicesSavedStorage] = useState(
		JSON.parse(localStorage.getItem("savedServices"))
	);

	const fetchData = async () => {
		try{
			const response = await api.post("http://localhost:3000/services/many", {
				servicesId: servicesSavedStorage,
			});
			
			setServicesSaved(response.data);
			console.log('data api simple fetch', response);
		} catch(err){
			console.log('Morreuuuuuuu! ', err)
		}
	}

	// const { data, isFetching, refresh } = usePost({
	// 	url: "/services/many",
	// 	payload: {
	// 		servicesId: servicesSavedStorage ? servicesSavedStorage : [],
	// 	},
	// 	start: true,
	// });

	useEffect(() => {
		fetchData();
		// setServicesSaved(data);
	}, []);


	
	const onRemoveServicesToSaved = () => {
		const servicesStorage = JSON.parse(localStorage.getItem("savedServices"));

		if (servicesStorage?.length > 0) {
			localStorage.setItem(
				"savedServices",
				JSON.stringify(
					servicesStorage.filter((id) => !checkedList.includes(id))
				)
			);

			setServicesSaved(
				servicesSaved.filter((service) => !checkedList.includes(service?.id))
			);
			// console.log('sla', servicesSaved)
		}
		
		setServicesSavedStorage(JSON.parse(localStorage.getItem("savedServices")));
		// refresh(servicesSavedStorage);
	};

	const onChecked = (id) => {
		let newCheckedList = [...checkedList];

		const idSavedIndex = newCheckedList.indexOf(id);
		if (idSavedIndex !== -1) newCheckedList.splice(idSavedIndex, 1);
		else newCheckedList.push(id);

		setCheckedList(newCheckedList);
	};

	// console.log('checklist', checkedList)
	// console.log("services", servicesSavedStorage);
	// console.log("service list", servicesSaved);
	// console.log("data api", data);
	console.log(checkedList);
	console.log('----------------');

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
						servicesSaved?.length > 4 && "justify-between"
					}`}
				>
					{(servicesSaved) &&
						servicesSaved?.map((service, index) => (
							<CardSavedService
								key={index}
								id={service?.id}
								serviceName={service?.name}
								price={service?.price}
								rating={service?.averageRating}
								businessName={service?.business?.name}
								onChecked={() => onChecked(service.id)}
							/>
						))}
				</section>
			</main>
			{/* <Shortly /> */}''
		</>
	);
};

export default Saved;
