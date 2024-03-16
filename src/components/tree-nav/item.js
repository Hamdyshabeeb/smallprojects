import { useState } from 'react';
import MenuList from './List';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function MenuItem({ itemData }) {
	const [displayCurrentChildren, setDisplayCurrnetChildren] = useState({});

	function handelItemClick(getCurrentLabel) {
		setDisplayCurrnetChildren({
			...displayCurrentChildren,
			[getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
		});
	}
	return (
		<li className="menu-item">
			<div
				className="item-container"
				onClick={() => handelItemClick(itemData.label)}
			>
				<p> {itemData.label}</p>
				{itemData && itemData.children && itemData.children.length > 0 ? (
					<span>
						{displayCurrentChildren[itemData.label] ? (
							<FaMinus color="#fff" />
						) : (
							<FaPlus color="#fff" />
						)}
					</span>
				) : (
					''
				)}
			</div>

			{itemData &&
			itemData.children &&
			itemData.children.length > 0 &&
			displayCurrentChildren[itemData.label] ? (
				<MenuList menuData={itemData.children} />
			) : (
				''
			)}
		</li>
	);
}
