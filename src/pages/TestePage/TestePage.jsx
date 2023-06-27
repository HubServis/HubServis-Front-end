import React from 'react';
import {MenuSidebar} from '../../components';
import CalendarScheduling from '../Scheduling-management/components/calendar';

const TestePage = () => {
    return (
			<>
				{/* <MenuSidebar /> */}
				<CalendarScheduling startingDate={new Date()}/>
			</>
		);
}
 
export default TestePage;