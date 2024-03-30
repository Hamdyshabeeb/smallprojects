import { useRef, useState } from 'react';
import useOutSideClick from './useOutsideClick';

export default function OutsideClickTest() {
	const [hide, setHide] = useState(true);
	const ref = useRef();
	useOutSideClick(ref, (e) => setHide(true));
	return (
		<div className="wrapper flex-column">
			{hide ? (
				<button
					onClick={() => {
						setHide(false);
					}}
				>
					Show Content
				</button>
			) : (
				<div className="out-side-click-message" ref={ref}>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nisi
						facilis nesciunt praesentium quod. Quam voluptatum aspernatur nihil,
						reiciendis rem eveniet exercitationem veniam, autem quidem ipsum
						repellat ipsam quas rerum.
					</p>
				</div>
			)}
		</div>
	);
}
