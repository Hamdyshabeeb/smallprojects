import { useEffect, useState } from 'react';
import SuggestionBox from './matchedData';
import './styles.css';

export default function SearchAutoComplete() {
	const [search, setSearch] = useState('');
	const [users, setUsers] = useState([]);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(false);
	const [showBox, setShowBox] = useState(true);

	const matchedSearch =
		search.length > 0
			? users.filter(
					(user) => user.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
			  )
			: [];

	function handelChangeInput(e) {
		setSearch(e.target.value);
		setShowBox(true);
	}

	async function getUsers() {
		try {
			setErr(null);
			setLoading(true);

			const res = await fetch('https://dummyjson.com/users');
			const data = await res.json();
			if (data && data.users && data.users.length > 0) {
				setLoading(false);
				setUsers(data.users.map((user) => user.firstName));
			}
		} catch (error) {
			setLoading(false);
			setErr(error.message);
		}
	}
	function handelSuggestionClick(user) {
		setSearch(user);
		setShowBox(false);
	}
	useEffect(() => {
		getUsers();
	}, []);

	if (err) {
		<div className="wrapper flex-column">
			<h2>Error</h2>
			<p> {err.message}</p>
		</div>;
	}

	return (
		<div className="wrapper flex-column vertical-start">
			<input
				name="search"
				className="search-users"
				type="text"
				placeholder="Type to search"
				disabled={loading}
				value={search}
				onChange={handelChangeInput}
			/>

			{loading && <p> Please wait getting users</p>}

			{matchedSearch.length > 0 && showBox && (
				<SuggestionBox
					matchedUsers={matchedSearch}
					suggestionClick={handelSuggestionClick}
				/>
			)}
		</div>
	);
}
