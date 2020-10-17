import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import ConnectedApp from './components/ConnectedApp';

render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('root')
);
