import React from 'react';

const HoursOrMinutsSelect = ({type = "h", maxWidth = "120px", minWidth = "0px"}) => {

    const DisplayOptions = () => {
        const options = [
            
        ];
        if(type == "h"){
            for(let i = 0; i <= 23; i++){
                let hour = i < 10 ? `0${i}` : i;
                options.push(
                    <option className="text-[var(--dark-gray)]" value={hour}>{hour} h</option>
                );
            }
        }else{
            for(let i = 0; i < 60; i++){
                let min = i < 10 ? `0${i}` : i;
                options.push(
                    <option className="text-[var(--dark-gray)]" value={min}>{min} m</option>
                );
            }
        }

        // return options.map(option => <option value={option.value}>{option.title}</option>);
        return options;
    }

    return ( 
        <>
            <div className={`w-full max-w-[${maxWidth}] min-w-[${minWidth}]`}>
                <select
                  id=""
                  name=""
                  className="text-[var(--dark-gray)] bg-transparent py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
                >
                  <DisplayOptions/>
                </select>
              </div>
        </>
     );
}
 
export default HoursOrMinutsSelect;