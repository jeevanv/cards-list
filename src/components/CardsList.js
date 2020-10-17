import React from 'react';
import config from '../config';

const CardsList = ({cardsData, onSelectHandler}) => {
	const cardElements = Object.keys(cardsData).map((userId) => {
		const {id, name, email, company: {catchPhrase}} = cardsData[userId];
		const {avatarBaseUrl} = config;
		const avatarUrl = avatarBaseUrl ? `${avatarBaseUrl}/${email}.png`: null;	
		
		const onClickHandler = (evt) => {
			evt.stopPropagation();
			onSelectHandler(id);
		};

		return (
			<div className="row" key={id} onClick={onClickHandler}>
				<div className="column1"> <img src={avatarUrl} /></div>
				<div className="column2">
					<div className="phrase">&quot;{catchPhrase}&quot;</div>
					<div><b>{name}</b></div>
					<div>{email}</div>
				</div>
			</div>
		);
	});

	return (
		<div className="card-list"> {cardElements} </div>
	);
};

export default CardsList;
