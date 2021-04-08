import {
	Divider,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Popover
} from '@material-ui/core';
import { Settings, MeetingRoom } from '@material-ui/icons';
import { Routes } from 'domains/shared/constants/Routes';
import { useLogoutMutation } from 'generated/graphql';
import { PopupState, bindPopover } from 'material-ui-popup-state/core';
import { FC, memo, useCallback } from 'react';
import { MenuLinkItem } from '../../menu/MenuLinkItem';

interface UserDropDownMenuProps {
	popupState: PopupState;
}

export const UserDropDownMenu: FC<UserDropDownMenuProps> = memo(
	function UserDropDownMenu({ popupState }) {
		const [logout] = useLogoutMutation({ fetchPolicy: 'no-cache' });
		const handleLogout = useCallback(() => {
			logout().catch(() => null);
			popupState.close();
		}, [logout, popupState]);

		return (
			<Popover
				{...bindPopover(popupState)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
			>
				<MenuList>
					<MenuLinkItem
						href={Routes.user.SETTINGS}
						onClick={popupState.close}
					>
						<ListItemIcon>
							<Settings />
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</MenuLinkItem>

					<Divider />

					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<MeetingRoom />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</MenuItem>
				</MenuList>
			</Popover>
		);
	}
);