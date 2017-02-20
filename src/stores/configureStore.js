import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index.js';

const logger = createLogger();
//we sync our store with the browser history, 
//so that we can listen later on to events based on our current route. 
const router = routerMiddleware(browserHistory);
//properties like browser path or query params in the URL 
//can be accessed in the store now.
const createStoreWithMiddleware = applyMiddleware(thunk, router,logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware (rootReducer, initialState);
};
