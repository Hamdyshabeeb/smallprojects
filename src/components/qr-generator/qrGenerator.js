import QRCode from 'react-qr-code';
import { useState } from 'react';
import './styles.css';
export default function QrGenerator() {
	const [inputValue, setInputValue] = useState('');
	const [qrValue, setQrValue] = useState('');

	function handelButtonClick() {
		setQrValue(inputValue);
	}
	console.log(inputValue, qrValue);
	return (
		<div className="wrapper">
			<div className="qr-app">
				<div className="qr-input">
					<input
						name="input"
						type="text"
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>
					<button onClick={handelButtonClick}>Generate QR</button>
				</div>
				<div>
					<QRCode bgColor="#fff" value={qrValue} size={300} />
				</div>
			</div>
		</div>
	);
}
