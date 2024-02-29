import { useEffect, useState } from 'react';
import './styles.css';

export default function RandomColor() {
	//either hex or rgb
	const [colorType, setTypeColor] = useState('hex');
	const [color, setColor] = useState('#ffffff');

	function generateRandomHexColor() {
		const hex = [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
		];
		let color = '#';

		for (let index = 0; index < 6; index++) {
			color = color + hex[Math.floor(Math.random() * hex.length)];
		}
		return color;
	}

	function generateRandomRGBColor() {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);

		return `rgb(${r},${g},${b})`;
	}

	function handelGenerateColor() {
		if (colorType === 'hex') {
			setColor(generateRandomHexColor);
		} else {
			setColor(generateRandomRGBColor);
		}
	}

	useEffect(() => {
		handelGenerateColor();
	}, [colorType]);

	return (
		<div className="wrapper" style={{ backgroundColor: color }}>
			<div>
				<div className="colors">
					<button
						onClick={() => {
							setTypeColor('rgb');
						}}
					>
						RGB Color
					</button>
					<button
						onClick={() => {
							setTypeColor('hex');
						}}
					>
						HEXA Color
					</button>
					<button onClick={handelGenerateColor}>Generate Color</button>
				</div>
				<div>
					<h3>{colorType}</h3>
					<p>color is {color}</p>
				</div>
			</div>
		</div>
	);
}
