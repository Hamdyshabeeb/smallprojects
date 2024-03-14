import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import './styles.css';

export default function ImageSlider({ url, page, limit }) {
	const [images, setImages] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	function handelIndecatorClick(index) {
		if (index === currentImage) return;

		setCurrentImage(index);
	}

	function handelNextClick() {
		const lastImage = images.length - 1;
		if (currentImage === lastImage) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	}

	function handelPrevClick() {
		const lastImage = images.length - 1;

		if (currentImage === 0) {
			setCurrentImage(lastImage);
		} else {
			setCurrentImage(currentImage - 1);
		}
	}

	async function getImages() {
		try {
			setLoading(true);
			setError(null);
			const res = await fetch(`${url}?page=${page}&limit=${limit}`);
			const data = await res.json();

			if (data) {
				setLoading(false);
				setError(null);
				setImages(data);
			}
		} catch (e) {
			setLoading(false);
			setError(e.message);
		}
	}

	useEffect(() => {
		if (url !== '') getImages();
	}, [url]);

	if (error !== null) {
		return (
			<div className="wrapper">
				<div>
					<h2> Error Ocuured</h2>
					<p> {error}</p>
				</div>
			</div>
		);
	}

	if (loading) {
		return (
			<div className="wrapper">
				<div>
					<p>Loading Data...</p>{' '}
				</div>
			</div>
		);
	}
	return (
		<div className="wrapper">
			<div className="slider-container">
				<ul className="slider list">
					{images && images.length
						? images.map((image, index) => (
								<li
									className={
										index === currentImage
											? 'slider-item active'
											: 'slider-item'
									}
									key={image.id}
								>
									<img src={image.download_url} alt={image.url} />
								</li>
						  ))
						: ''}
				</ul>
				<div className="indicator-container">
					{[...Array(limit)].map((_, index) => (
						<button
							onClick={() => handelIndecatorClick(index)}
							className={
								index === currentImage ? 'indicator active' : 'indicator'
							}
							key={index}
						></button>
					))}
				</div>
				<div className="nav-button-container">
					<button className="next" onClick={handelNextClick}>
						<FaAngleRight size={30} />
					</button>
					<button className="prev">
						<FaAngleLeft size={30} onClick={handelPrevClick} />
					</button>
				</div>
			</div>
		</div>
	);
}
