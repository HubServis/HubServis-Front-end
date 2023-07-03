import { useState } from "react";

import { ManagmentContainer } from "../../containers/managment";

import { Calendar } from "../../components/Managment/Calendar";
import { ListAgenda } from "../../components/Managment/Agenda/List";
import { BlockList } from "../../components/Managment/Agenda/Blocked";
import { ClientList } from "../../components/Managment/Clients/List";
import { ServiceList } from "../../components/Managment/Services/List";
import { CategoryList } from "../../components/Managment/Services/Category";

const contextPages = [
  { section: <Calendar /> },
  { section: <ListAgenda /> },
  { section: <BlockList /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <ClientList /> },
  { section: <ServiceList /> },
  { section: <CategoryList /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
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
