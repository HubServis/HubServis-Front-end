import { HeaderManagment } from "../../components/Managment/Header";
import { MenuSidebar } from "../../components/Managment/MenuSidebar/";

export const ManagmentContainer = ({ children, context, setContext }) => (
  <div className="w-full flex flex-row">
    <MenuSidebar context={context} setContext={setContext} />
    <div className="px-[40px] pt-[24px] gap-[35px] w-[100%] h-full">
      {children}
    </div>
  </div>
);
