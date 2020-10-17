import axios from 'axios';
import config from '../config';
import {getRandomItems} from '../utils';

const ACTION_TYPES = [
	'FETCH_CARDS_SUCCESS',
	'FETCH_CARDS_FAILURE',
	'FETCH_POSTS_SUCCESS',
	'FETCH_POSTS_FAILURE',
	'SET_CURRENT_USER'
];

// action creators
const fetchCardsSuccess = (data) => {
	return {
		type: ACTION_TYPES[0],
		data
	}
};

const fetchPostsSuccess = (data) => {
	return {
		type: ACTION_TYPES[2],
		data
	};
};

export const setCurrentUser = (userId) => {
	return {
		type: ACTION_TYPES[4],
		userId
	};
};

/* since cache control respone header set to public with max-age, 
   we can store just random selected cards instead of all cards in redux */
const normalizeCardsData = (cardsList = []) => {
	const randomCards = getRandomItems(cardsList, 3);

	const cardsData = {};
	randomCards.forEach((card) => {
		cardsData[card.id] = card;
		analytics.track('Selected card', {
			name: card.name
		  });
		console.log(card.name);
	});

	return cardsData;
};

// normalize posts data based on userid
const normalizePostsData = (postsList = []) => {
	const key = postsList[0] && postsList[0].userId;
	return {
		[key]: postsList
	};
};

// async actions
export const fetchCards = () => {
	return (dispatch) => {
		axios.get(config.cardsUrl)
			.then((res) => {
				const cardsData = normalizeCardsData(res.data);
				dispatch(fetchCardsSuccess(cardsData));
			})
			.catch((err) => {
				// dispatch error data
			})		
	};
}

export const fetchUserPosts = (userId) => {
	const {postsBaseUrl} = config;
	return (dispatch, getState) => {
		const url = `${postsBaseUrl}${userId}`;
		axios.get(url)
			.then((res) => {
				const postsData = normalizePostsData(res.data);
				dispatch(fetchPostsSuccess(postsData));
			})
			.catch((err) => {
				// dispatch error data
			})		
	};
}
