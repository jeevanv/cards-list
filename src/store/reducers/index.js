import {combineReducers} from 'redux';

const cardsReducer = (state={}, action) => {
	const {type, data} = action;
	let nextState;

	switch(type) {
	case 'FETCH_CARDS_SUCCESS':
		nextState = {...state, ...data};
		break;

	default: 
		nextState = state;
		break;
	}

	return nextState;
};

const postsReducer = (state={}, action) => {
	const {type, data} = action;
	let nextState;

	switch(type) {
	case 'FETCH_POSTS_SUCCESS':
		nextState = {...state, ...data};
		break;

	default: 
		nextState = state;
		break;
	}

	return nextState;
};

const currentUserReducer = (state=null, action) => {
	const {type, userId} = action;
	let nextState;

	switch(type) {
	case 'SET_CURRENT_USER':
		nextState = userId;
		break;

	default: 
		nextState = state;
		break;
	}

	return nextState;
};

export default combineReducers({
	cardsData: cardsReducer,
	postsData: postsReducer,
	currentUser: currentUserReducer
});
