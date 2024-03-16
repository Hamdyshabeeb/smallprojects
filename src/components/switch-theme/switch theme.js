import { useEffect, useState } from 'react';

export default function SwitchTheme() {
	const [theme, setTheme] = useState(() => {
		let intialTheme = 'dark';

		try {
			intialTheme = localStorage.getItem('theme') || 'dark';
		} catch (error) {
			intialTheme = 'dark';
		}

		return intialTheme;
	});

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	function handelChangeThem() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<div
			className="wrapper"
			style={{
				backgroundColor: theme === 'dark' ? '#023047' : '#fff',
				transition: 'all 0.3s',
			}}
		>
			<div className="setting">
				<h2
					style={{
						color: theme === 'dark' ? '#bde0fe' : '#023047',
						fontSize: '4.5rem',
						letterSpacing: '2px',
					}}
				>
					{theme.toUpperCase()}{' '}
				</h2>
				<button
					style={{
						padding: '1rem 2rem',
						fontWeight: '700',
						fontSize: '1.5rem',
						color: theme === 'dark' ? '#023047' : '#bde0fe',
						backgroundColor: theme === 'dark' ? '#8ecae6' : '#023047',
						border: 'none',
						borderRadius: '5px',
					}}
					onClick={handelChangeThem}
				>
					Change Theme
				</button>
			</div>
		</div>
	);
}
