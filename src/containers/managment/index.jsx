import { HeaderManagment } from '../../components/Managment/Header'
import { MenuSidebar } from '../../components/Managment/MenuSidebar/'

export const ManagmentContainer = ({ children, context, setContext }) => (
    <MenuSidebar context={context} setContext={setContext}>
        <div className="w-full flex flex-col px-[40px] pt-[24px] gap-[35px]">
            <HeaderManagment />
            {children}
        </div>
    </MenuSidebar>
);
