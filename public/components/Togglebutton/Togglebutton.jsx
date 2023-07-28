import React from "react";
import {useState} from 'react';
import './style.css'

const Togglebutton = ({label, toggled, onClick}) => {

    /*  */
    const [isToggled, toggle] = useState(toggled);

    const callback = () =>{
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return(
        <>
            <label className="rotulo">
                <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span className="linha1"/>
                <strong className="Anual">Anual</strong>
                <strong className="Mensal">Mensal</strong>
            </label>
        </>
    )
    
}

export default Togglebutton