import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Rating } from "primereact/rating";

const AvaliateService = ({ TotalRatings }) => {
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);

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

  return (
    <>
      {displayClickMessage()}
      <Dialog
        header="Deixe uma avaliação"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <Rating value={rating} cancel={false} size={32} onChange={(e) => setRating(e.value)}/>
        <div className="mt-3">
            <Button label="Cancelar" severity="danger" />
            <Button label="Enviar" severity="sucess" className="ml-4" onClick={() => cancelRating()}/>
        </div>
      </Dialog>
    </>
  );
};

export default AvaliateService;
