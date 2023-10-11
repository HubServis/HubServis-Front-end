import React from "react";
import "../style.css";
import { CardService } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";

const HomeListServices = () => {
    const { data, error, isFetching } = useFetch("/services");

    return (
    <>
      <div className="cards-all-services">
        {
            data?.map((service, index) => <CardService key={index} id={service.id} serviceName={service?.name} businessName={service?.business?.name} price={service?.price} rating={service?.averageRating}/>)
        }
      </div>
    </>
  );
};

export default HomeListServices;
