import { useEffect, useState } from 'react';
import './styles.css';

export default function ProductPagination({ url, limit }) {
	const [products, setProducts] = useState([]);
	const [skip, setSkip] = useState(0);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(false);

	async function getProducts() {
		try {
			setLoading(true);
			setErr(null);
			const res = await fetch(`${url}?limit=${limit}&skip=${skip}`);
			const data = await res.json();
			if (data && data.products.length > 0) {
				setLoading(false);
				setProducts(data.products);
				setSkip(skip + limit);
			}
		} catch (error) {
			setLoading(false);
			setErr(error);
		}
	}

	useEffect(() => {
		getProducts();
	}, [url]);

	if (err) {
		return (
			<div className="wrapper">
				<h2>Error Occured</h2>
				<p>{err.message}</p>
			</div>
		);
	}

	if (loading) {
		return (
			<div className="wrapper">
				<p>Lodading Data ....</p>
			</div>
		);
	}

	return (
		<div className="wrapper flex-column">
			<ul className="product-list list">
				{products && products.length > 0
					? products.map((product) => (
							<li className="product" key={product.id}>
								<img src={product.thumbnail} alt={product.description} />
								<h3> {product.title}</h3>
								<p>{product.description}</p>
								<p>{product.id}</p>
							</li>
					  ))
					: ''}
			</ul>
			<div className="load-more-button">
				<button disabled={skip >= 100 ? true : false} onClick={getProducts}>
					load More
				</button>
			</div>
		</div>
	);
}
