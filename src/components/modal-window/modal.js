import { useState } from 'react';
import ModalWindow from './modalWidow';
import './styles.css';

export default function Modal() {
	const [modalActive, setModalActive] = useState(false);

	function handelSwitchModal() {
		setModalActive(!modalActive);
	}

	return (
		<div className="wrapper">
			<button className="show-modal-btn" onClick={handelSwitchModal}>
				Show Modal
			</button>
			{modalActive && <ModalWindow onClose={handelSwitchModal} />}
		</div>
	);
}
