import MenuItem from './item';

export default function MenuList({ menuData }) {
	return (
		<ul className="menu">
			{menuData && menuData.length > 0
				? menuData.map((item) => <MenuItem itemData={item} key={item.label} />)
				: ''}
		</ul>
	);
}
