import { FaSearch } from 'react-icons/fa';
import './styles.css';

import { useState, useReducer } from 'react';
import UserCard from './userCard';

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState('');

	const [userData, dispatch] = useReducer(reducer, intialData);

	function handelError(err) {
		dispatch({
			type: 'err',
			playLoad: err.message,
		});
	}

	function handelUser(user) {
		dispatch({ type: 'ok', playLoad: user });
	}

	function handelLoading() {
		dispatch({
			type: 'loading',
		});
	}

	async function getUser() {
		try {
			handelLoading();
			const res = await fetch(`https://api.github.com/users/${userName}`);
			const user = await res.json();
			if (user.message === 'Not Found') {
				handelError(user);
			} else {
				handelUser(user);
			}
		} catch (error) {
			handelError(error);
		}
	}

	return (
		<div className="wrapper flex-column">
			<div className="search-github-name">
				<input
					type="text"
					value={userName}
					placeholder="Github Name"
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					disabled={userName === ''}
					onClick={() => {
						getUser();
						setUserName('');
					}}
				>
					<FaSearch />
				</button>
			</div>

			<UserCard userData={userData} />
		</div>
	);
}

const intialData = {
	err: null,
	user: 'intial',
	loading: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'ok': {
			return {
				...state,
				err: null,
				loading: false,
				user: action.playLoad,
			};
		}

		case 'err': {
			return {
				...state,
				err: action.playLoad,
				loading: false,
				user: '',
			};
		}

		default: {
			return {
				...state,
				err: null,
				loading: true,
				user: '',
			};
		}
	}
}
