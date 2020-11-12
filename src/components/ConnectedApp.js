import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardsList from './CardsList';
import UserPosts from './UserPosts';
import {
	fetchCards,
	fetchUserPosts,
	setCurrentUser
} from '../actions';

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCards: () => {
			dispatch(fetchCards());
		},
		onSelectHandler: (userId) => {
			dispatch(setCurrentUser(userId));
			dispatch(fetchUserPosts(userId));
		}
	};
};

class App extends Component {

	componentDidMount() {
		const {fetchCards} = this.props;
		fetchCards();
	}

	render() {
		const {cardsData, currentUser, postsData, onSelectHandler} = this.props;

		return (
			<div>
				<h3>Cards Demo</h3>
				<div>
					{cardsData && 
						<CardsList cardsData={cardsData} onSelectHandler={onSelectHandler} />
					}
					{postsData && postsData[currentUser] && 
						<UserPosts postsList={postsData[currentUser]} />
					}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
