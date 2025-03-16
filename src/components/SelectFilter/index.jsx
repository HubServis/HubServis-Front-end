import React from "react";

const SelectFilter = () => {
  return (
    <>
      <div className="flex min-w-[200px] h-[56px] py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
        <select
          className="w-[100%] text-[16px] outline-none bg-transparent"
          placeholder="Test"
        >
          <option>Todos</option>
          <option>Pendentes</option>
          <option>Concluidos</option>
          <option>Cancelados</option>
        </select>
      </div>
    </>
  );
};

export default SelectFilter;
