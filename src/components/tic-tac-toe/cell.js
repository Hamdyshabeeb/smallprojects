import { IoMdRadioButtonOff } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

export default function Cell({ value, handelClick, index }) {
	return (
		<button
			onClick={() => handelClick(index)}
			className={value === 'X' ? 'x cell' : value === 'O' ? 'O cell' : 'cell'}
		>
			{value === 'X' ? (
				<IoMdClose className="game-icon" />
			) : value === 'O' ? (
				<IoMdRadioButtonOff className="game-icon" />
			) : (
				''
			)}
		</button>
	);
}
