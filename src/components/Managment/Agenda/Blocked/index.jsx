import crossIcon from "../../../../assets/Managment/plus.svg";

import { ManagmentContainer } from "../../../../containers/managment";

import { BlockedUser } from "./components/blockedUser";

export const BlockList = () => {
  return (
      <div>
        <h2>Bloqueio de Agendamentos</h2>

        <div>
          <div>
            <img src={crossIcon} alt="cross icon" />
          </div>

          <div>
			<BlockedUser/>
          </div>
        </div>
      </div>
  );
};
