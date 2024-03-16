import menus from './data';
import MenuList from './List';

import './styles.css';

export default function TreeMenu() {
	return (
		<div className="wrapper sid-bar-container">
			<MenuList menuData={menus} />
		</div>
	);
}
