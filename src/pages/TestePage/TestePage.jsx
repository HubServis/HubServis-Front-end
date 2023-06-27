import React, {useState} from 'react';
import {MenuSidebar} from '../../components';
import CalendarScheduling from '../Scheduling-management/components/calendar';
import { MOCKEVENTS } from '../Scheduling-management/components/calendar/count';

const TestePage = () => {
	const [events, setEvents] = useState(MOCKEVENTS);

	
	const addEvent = (date, color) => {
		const text = window.prompt('text for event');
		setEvents(prev => [...prev, {date, title: text, color}]);
	}

    return (
			<>
				{/* <MenuSidebar /> */}
				<CalendarScheduling
					startingDate={new Date()}
					eventsArr={events}
					addEvent={addEvent}
				/>
			</>
		);
}
 
export default TestePage;