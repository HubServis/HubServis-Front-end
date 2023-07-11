import React from "react";

/*Options deve receber um array de obj no seguinte padrão
{
    title:"",
    value:"",
}
*/

const SexyCustomSelect = () => {
  const options = [
    {
      title:"M",
      value:"M",
    },
    {
      title:"F",
      value:"F",
    },
    {
      title:"Outro",
      value:"Outro",
    },
  ];

    const DisplayOptions = () => {
        if(options.length == 0){
            return <option className="text-sm" value="default" disabled selected>null</option>
        }
        
        return options.map(option => <option value={option.value}>{option.title}</option>);
    }

  return (
    <>
        <select
          className="bg-transparent py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
          defaultValue={"default"}
        >
          <DisplayOptions/>
        </select>
    </>
  );
};

export default SexyCustomSelect;
