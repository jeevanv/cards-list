import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

const initialState = {
	cardsData: null,
	postsData: null,
	currentUser: null
};

const store = createStore(appReducer, initialState, applyMiddleware(thunk));

export default store;
