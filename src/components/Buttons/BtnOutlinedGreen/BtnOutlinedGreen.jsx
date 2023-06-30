import React from 'react';
import './Styles.css'

const BtnOutlinedGreen = ({children, onclick = () => {}}) => {
    return (
			<>
				<button className="btn-outlined-green" onClick={() => onclick()}>
					{children}
				</button>
			</>
		);
}
 
export default BtnOutlinedGreen;