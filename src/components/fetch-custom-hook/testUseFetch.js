import useFetch from './useFetch';
export default function UseFetchHookTest() {
	const {
		data = {},
		status,
		error,
	} = useFetch('https://dummyjson.com/products', {});

	const products = data?.products || [];
	if (status === 'error') {
		<div className="wrapper flex-column">
			<h2>UseFetch Hook Testing </h2>
			<p> {error.message}</p>
		</div>;
	}

	return (
		<div className="wrapper flex-column">
			<h2>UseFetch Hook Testing </h2>

			{status === 'loading' ? (
				<p> Loading Products</p>
			) : status === 'success' ? (
				<ul className="list">
					{products.map((product) => (
						<li key={product.id}> {product.title}</li>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
}
