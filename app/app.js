/**
 * app.js
 *
 * 整个应用的总入口
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';

import matchMedia from 'matchmedia-polyfill';

import {
	applyRouterMiddleware,
	browserHistory,
	Router
} from 'react-router';
import {
	syncHistoryWithStore
} from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// 结合 redux store 和 history
const initialState = {};
const store = configureStore(initialState, browserHistory);

if (window.devToolsExtension) {
	window.devToolsExtension.updateStore(store);
}

//import {
//	selectLocationState
//} from 'Pages/BasePage/selectors';
//const history = syncHistoryWithStore(browserHistory, store, {
//	selectLocationState: selectLocationState(),
//});

import {BasePage} from 'Pages/LoginPage';
import createRoutes from './routes';
const rootRoute = {
	component: BasePage,
	childRoutes: createRoutes(store),
};
window.dgn = document.getElementById('dgn');
window.dgn.style.display = "none"
ReactDOM.render((
	<Provider store={store}>
		<Router
			history={browserHistory}
			routes={rootRoute}
			render={applyRouterMiddleware(useScroll())}>
		</Router>
	</Provider>
), document.getElementById('app'));
