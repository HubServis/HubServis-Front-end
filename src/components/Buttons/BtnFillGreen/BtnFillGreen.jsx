import React from 'react';
import './Styles.css'

const BtnFillGreen = ({children, onclick = () => {}}) => {
    return (
			<>
				<button className="btn-fill-green" onClick={() => onclick()}>
					{children}
				</button>
			</>
		);
}
 
export default BtnFillGreen;