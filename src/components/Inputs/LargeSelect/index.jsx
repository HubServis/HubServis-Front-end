import React from "react";

/*Options deve receber um array de obj no seguinte padrão
{
    title:"",
    value:"",
}
*/

const LargeSelect = ({options = []}) => {

    const DisplayOptions = () => {
        if(options.length == 0){
            return <option className="text-sm" value="default" disabled selected>Sem opções Disponiveis</option>
        }
        
        return options.map(option => <option value={option.value}>{option.title}</option>);
    }

  return (
    <>
        <select
          className="bg-transparent py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] text-sm text-[var(--dark-gray)]"
          defaultValue={"default"}
        >
          <DisplayOptions/>
        </select>
    </>
  );
};

export default LargeSelect;
