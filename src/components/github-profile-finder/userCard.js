export default function UserCard({ userData }) {
	const {
		name,
		avatar_url,
		login,
		html_url,
		repos_url,
		followers,
		following,
		created_at,
		updated_at,
		bio,
		email,
		location,
	} = userData.user;

	const createdDate = created_at ? new Date(created_at) : '';
	const updatedDate = updated_at ? new Date(updated_at) : '';

	if (userData.user === 'intial') {
		return <p> Enter User Name Then Press Search</p>;
	}

	if (userData.err) {
		return (
			<div>
				<h2> Can not get user</h2>
				<p> {userData.err}</p>
			</div>
		);
	}

	if (userData.loading) {
		return (
			<div>
				<h2> Getting User Please Wait...</h2>
			</div>
		);
	}

	return (
		<div className="github-user-card">
			<div className="avatar">
				<img src={avatar_url} alt="user" />
			</div>
			<ul className="list github-user-info">
				<li>
					<span>Name</span> <span>{name || login}</span>
					<a href={html_url} alt="github page">
						Github Page
					</a>
					<a href={repos_url} alt="repos page">
						Repos Page
					</a>
				</li>

				<li>
					<span>Following</span> {following}
				</li>
				<li>
					<span> Followers</span> {followers}
				</li>

				<li>
					{' '}
					<span>Joined In </span>
					{createdDate &&
						`${createdDate.getDate()} ${createdDate.toLocaleDateString(
							'en-us',
							{
								month: 'short',
								year: 'numeric',
							}
						)} `}
				</li>

				<li>
					<span>Last Upadate</span>{' '}
					{updatedDate &&
						`${updatedDate.getDate()} ${updatedDate.toLocaleDateString(
							'en-us',
							{
								month: 'short',
								year: 'numeric',
							}
						)} `}
				</li>

				<li>
					<span>Location</span>
					{location}
				</li>
				<li>
					<span>Email </span>
					{email}
				</li>

				<li>
					<span>Bio</span> <p>{bio}</p>
				</li>
			</ul>
		</div>
	);
}
