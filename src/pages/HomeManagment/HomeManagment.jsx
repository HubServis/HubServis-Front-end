import React from 'react';
import CalendarScheduling from './calendar';
import { MenuSidebar } from '../../components'

const HomeManagment = () => {
    return ( 
        <>
            <MenuSidebar>
                <CalendarScheduling/>
            </MenuSidebar>
        </>
     );
}
 
export default HomeManagment;