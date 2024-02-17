/**
 *
 * @param {{id:number,question:string,answer:string}} item
 */

export default function Item({ item, handelClick, active }) {
	return (
		<li
			className={
				active ? 'item-wrapper list-item active' : 'item-wrapper list-item '
			}
			onClick={() => {
				handelClick(item.id);
			}}
		>
			<div className="item-title">
				<h3> {item.question}</h3>
				<span>+</span>
			</div>

			<div className=" item-answer">
				<p>{item.answer}</p>
			</div>
		</li>
	);
}
