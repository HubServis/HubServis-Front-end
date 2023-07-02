import { useState } from "react";

import { ManagmentContainer } from "../../containers/managment";

import { Calendar } from "../../components/Managment/Calendar";
import { BlockList } from "../../components/Managment/Agenda/Blocked";

const contextPages = [
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <BlockList />},
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
  { section: <Calendar /> },
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

  console.log(context)

  return (
    <ManagmentContainer context={context} setContext={setContext}>
      {(context !== null && contextPages[context].section) || <div></div>}
    </ManagmentContainer>
  );
};
