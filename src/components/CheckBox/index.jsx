import React, { useState } from 'react';
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";   

const CheckBox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox className='' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
 
export default CheckBox;