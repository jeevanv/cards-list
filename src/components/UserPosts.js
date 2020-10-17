import React from 'react';
import {getRandomItems} from '../utils';

const UserPosts = ({postsList}) => {
	const randomPosts = getRandomItems(postsList, 5);

	return (
		<div className="posts">
			{randomPosts.map((post) => {
				const {id, title, body} = post;
				return (
					<div key={id} className="post">
						<div className="post-title">{title}</div>
						<div className="post-content">{body}</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserPosts;
