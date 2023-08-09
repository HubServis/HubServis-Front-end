import { BtnToggle } from '../../../../Buttons/BtnToggle';

export const ProfessionalListModel = () => {
  return (
    <div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-center">
        <div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />

        <div className="flex items-center gap-[6px]">
          <p>Teste</p>
        </div>
      </div>

      <div className="flex items-center">
        <p>Horário geral</p>
      </div>

      <div className="flex items-center">
        <p>Nome</p>
      </div>

      <div className="flex gap-[10px]">
		<p>Ativado</p>
		<BtnToggle />
      </div>
    </div>
  );
};
