import { useState } from "react";

import { ManagmentContainer } from "../../containers/managment";

import { Calendar } from "../../components/Managment/Calendar";
import { ListAgenda } from "../../components/Managment/Agenda/List";
import { BlockList } from "../../components/Managment/Agenda/Blocked";
import { ClientList } from "../../components/Managment/Clients/List";
import { ServiceList } from "../../components/Managment/Services/List";
import { CategoryServiceList } from "../../components/Managment/Services/Category";
import { ProductList } from "../../components/Managment/Products/List";
import { ProductCategory } from "../../components/Managment/Products/Category";
import { ProffesionalList } from "../../components/Managment/Professional/List";
import { OfficeHour } from "../../components/Managment/Professional/OfficeHour";

const contextPages = [
  { section: <Calendar /> },
  { section: <ListAgenda /> },
  { section: <BlockList /> },

  { section: <Calendar /> },
  { section: <Calendar /> },

  { section: <ClientList /> },

  { section: <ServiceList /> },
  { section: <CategoryServiceList /> },

  { section: <ProductList /> },
  { section: <ProductCategory /> },

  { section: <ProffesionalList /> },
  { section: <OfficeHour /> },
];

export const MainManagment = () => {
  const [context, setContext] = useState(null);

  console.log(context);

  return (
    <ManagmentContainer context={context} setContext={setContext}>
      {(context !== null && contextPages[context].section) || <div></div>}
    </ManagmentContainer>
  );
};
