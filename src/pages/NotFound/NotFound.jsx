import React from 'react';
import imgNotFound from '../../assets/NotFound/not-found.svg';

const NotFound = ({msg = null}) => {
    if(!msg) return (
			<>
				<img
					src={imgNotFound}
					alt="Not Found Ilustration"
					className="max-w-2xl m-auto"
				/>

				<h2 className="text-center font-bold text-2xl mb-3">Page Not Found!</h2>
			</>
		);

    return (
        <>
            <img src={imgNotFound} alt="Not Found Ilustration" className='max-w-2xl m-auto'/>
            <h2 className='text-center font-bold text-2xl mb-3'>{msg}</h2>
        </>
    );
}
 
export default NotFound;