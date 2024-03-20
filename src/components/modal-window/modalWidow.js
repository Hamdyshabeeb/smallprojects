import { FaPlus } from 'react-icons/fa';

export default function ModalWindow({ onClose, header, footer, content }) {
	return (
		<div className="modal-bg">
			<div className="modal">
				<button className="modal-close" onClick={onClose}>
					<FaPlus />
				</button>

				<header className="modal-header">
					{header || <h3> Default Header </h3>}
				</header>
				<div className="modal-content">
					{content || <p> Default Content</p>}
				</div>

				<footer className="modal-footer">
					{footer || <p> Default Footer</p>}
				</footer>
			</div>
		</div>
	);
}
