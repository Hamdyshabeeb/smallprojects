import data from './data';
import Item from './item';
import { useState } from 'react';

import './styles.css';

export default function Accordion() {
	const [activeItems, setActiveItems] = useState([]);

	/**
	 *
	 * @param {number} itemId
	 */
	function handelClick(itemId) {
		const isActive = activeItems.indexOf(itemId);
		let newItems = [...activeItems];
		if (isActive === -1) {
			newItems.push(itemId);
		} else {
			newItems = newItems.filter((item) => itemId !== item);
		}

		setActiveItems(newItems);
	}

	const items =
		data && data.length > 0 ? (
			data.map((dataItem) => (
				<Item
					key={dataItem.id}
					item={dataItem}
					handelClick={handelClick}
					active={activeItems.indexOf(dataItem.id) === -1 ? false : true}
				/>
			))
		) : (
			<p> NO DATA AVILAble</p>
		);
	return (
		<div className="wrapper">
			<ul className="accordion list">{items}</ul>
		</div>
	);
}
