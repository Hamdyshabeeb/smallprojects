import { useEffect, useState } from 'react';
import Cell from './cell';
import './styles.css';
/**
 *
 * 0 1 2
 * 3 4 5
 * 6 7 8
 */

export default function TicTacToe() {
	const [cellsValue, setCellsValue] = useState(() => [...Array(9)].fill(''));
	const [isX, setIsX] = useState(true);
	const [status, setStatus] = useState('N');

	function checkWinner() {
		const winningPattren = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winningPattren.length; i++) {
			const [x, y, z] = winningPattren[i];

			if (
				cellsValue[x] === cellsValue[y] &&
				cellsValue[x] === cellsValue[z] &&
				cellsValue[x]
			) {
				return cellsValue[x];
			}
		}
		return false;
	}

	function handelCellClick(index) {
		if (cellsValue[index] || status !== 'N') return;
		const xo = isX ? 'X' : 'O';

		const newValues = [...cellsValue];
		newValues[index] = xo;
		setIsX(!isX);
		setCellsValue(newValues);
	}

	function handelReset() {
		const newCells = [...cellsValue].fill('');

		setIsX(true);
		setCellsValue(newCells);
		setStatus('');
	}

	function calculateMessage() {
		switch (status) {
			case 'D': {
				return 'The Game Is Drawn Please Reset';
			}
			case 'N': {
				return `Next Player Is ${isX ? 'X' : 'Y'}`;
			}
			case 'X': {
				return 'X is Winner To Play again Reset';
			}
			case 'O': {
				return 'O is Winner To Play again Reset';
			}

			default:
				break;
		}
	}

	useEffect(() => {
		const winner = checkWinner();
		if (!winner && cellsValue.every((cell) => cell !== '')) {
			setStatus('D');
		} else if (winner) {
			setStatus(winner);
		} else {
			setStatus('N');
		}
	}, [isX, cellsValue]);

	return (
		<div className=" wrapper game-wrapper">
			<div className={isX ? 'game x' : 'game o'}>
				{cellsValue.map((cell, index) => (
					<Cell
						key={index}
						index={index}
						value={cell}
						handelClick={handelCellClick}
					/>
				))}
			</div>

			<div className="controls">
				<button onClick={handelReset}>Reset</button>

				<p className=" message">{calculateMessage()}</p>
			</div>
		</div>
	);
}
