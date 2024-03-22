export default function SuggestionBox({ matchedUsers, suggestionClick }) {
	return (
		<ul className="matched-box list">
			{matchedUsers.map((user) => (
				<li key={user} onClick={() => suggestionClick(user)}>
					{user}
				</li>
			))}
		</ul>
	);
}
