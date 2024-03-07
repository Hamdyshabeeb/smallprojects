import { FaStar } from 'react-icons/fa';
import './star-rating';
import { useState } from 'react';
/**
 *
 * @param {*} param0
 * @returns
 */
export default function StarRating({ starNumber = 5 }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	function handelClick(index) {
		setRating(index + 1);
	}

	function handelMouseEnter(index) {
		setHover(index + 1);
	}

	function handelMouseLeave() {
		setHover(0);
	}

	return (
		<div className="wrapper">
			{[...Array(starNumber)].map((_, index) => (
				<FaStar
					size={40}
					key={index}
					onClick={() => handelClick(index)}
					onMouseEnter={() => handelMouseEnter(index)}
					onMouseLeave={handelMouseLeave}
					color={(index < rating && hover === 0) || index < hover ? 'gold' : ''}
				/>
			))}
		</div>
	);
}
