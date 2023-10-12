import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Rating } from "primereact/rating";
import { api } from "../../../../services/api";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";

const AvaliateService = ({ TotalRatings, serviceId }) => {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [inputValue, setInputValue] = useState();

  const btnClickHere = () => (
    <span
      className="cursor-pointer text-[var(--dark-green-2)] hover:text-[var(--dark-green)]"
      onClick={() => setVisible(true)}
    >
      Clique aqui.
    </span>
  );

  const displayClickMessage = () => {
    if (TotalRatings == 0) {
      return <p>Seja o primeiro a avaliar esse serviço, {btnClickHere()}</p>;
    }

    return <p>Avalie também esse serviço, {btnClickHere()}</p>;
  };

  const cancelRating = () => {
    setRating(0);
    setVisible(false)
  }

  const showMsgError = (error) => {
    if(error.response?.data?.message == 'Unauthorized'){
        return toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Não autorizado! Faça login e tente novamente.",
            life: 3000,
        });    
    }

    if(error.data.error){
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: error.response.data.error,
            life: 3000,
            });
    }

    if(error.response?.data){
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: error.response.data,
          life: 3000,
        });
    }

    toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Erro desconhecido!",
        life: 3000,
    });
  };

  const showMsgSucess = () => {
    toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Sua avaliação foi enviada!",
        life: 3000,
    });
  }

  const submitRating = async () => {
    try {
        const response = await api.post("/rating", { 
            serviceId,
            rating,
            comment: ""
         }, {
            headers: {
                Authorization: localStorage.getItem("@Auth:token")
            }
         });

        if (response.data.error) {
            showMsgError(response)
        } else {
            showMsgSucess();
        }
    } catch (error) {
        console.log();
        showMsgError(error)
    }

    cancelRating();
  }

  return (
    <>
      <Toast ref={toast} />
      {displayClickMessage()}
      <Dialog
        header="Deixe uma avaliação"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => cancelRating()}
      >
        <Rating value={rating} cancel={false} size={32} onChange={(e) => setRating(e.value)}/>
        <InputText value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled placeholder="Deixe seu comentário aqui..." className="mt-4 mb-6 w-full"/>
        <div className="mt-3">
            <Button label="Cancelar" severity="danger" onClick={() => cancelRating()}/>
            <Button label="Enviar" severity="sucess" className="ml-4" onClick={() => submitRating()}/>
        </div>
      </Dialog>
    </>
  );
};

export default AvaliateService;
