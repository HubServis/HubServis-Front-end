import crossIcon from '../../../../assets/Managment/plus.svg';

import { BlockedUsers } from "../../../../components/Managment/BlockedUsers";

export const BlockList = () => {
	return (
		<div>
			<h2>Bloqueio de Agendamentos</h2>

			<div>
				<div>
					<img src={crossIcon} alt="cross icon"/>
				</div>

				<div>
					<BlockedUsers />
				</div>
			</div>
		</div>
	);
}
