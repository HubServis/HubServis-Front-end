import React from "react";

/*Options deve receber um array de obj no seguinte padrão
{
    title:"",
    value:"",
}
*/

const LargeSelect = ({ options = [], placeholder }) => {

  const DisplayOptions = () => {
      if(options.length == 0){
          return <option className="text-sm" value="default" disabled selected>{placeholder ?? "Sem opções"}</option>
      }
      
      return options.map(option => <option value={option.value}>{option.title}</option>);
  }

  return (
    <>
        <select
          className="bg-transparent py-[16px] px-4 w-[100%] border-2 rounded-[8px] border-[var(--light-green)] text-sm text-[var(--dark-gray)]"
          defaultValue={"default"}
        >
          <DisplayOptions/>
        </select>
    </>
  );
};

export default LargeSelect;
