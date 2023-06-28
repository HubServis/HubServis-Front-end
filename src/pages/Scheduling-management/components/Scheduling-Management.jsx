import React from 'react';
import CalendarScheduling from './calendar';
import { MenuSidebar } from '../../../components'

const SchedulingManagement = () => {
    return ( 
        <>
            <MenuSidebar>
                <CalendarScheduling/>
            </MenuSidebar>
        </>
     );
}
 
export default SchedulingManagement;