import React, { useState } from 'react';
import { Checkbox } from "primereact/checkbox";

const CheckBox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox className='' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
 
export default CheckBox;